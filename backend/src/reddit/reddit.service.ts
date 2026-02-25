import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { RedisService } from "redis/redis.service";
import { PrismaService } from "prisma/prisma.service";
import { Source } from "@prisma/client";
import { Cron } from "@nestjs/schedule";
import * as subredditsJson from "../../subreddits.json";

@Injectable()
export class RedditService {
  private readonly logger = new Logger(RedditService.name);
  private sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  constructor(
    private readonly http: HttpService,
    private redis: RedisService,
    private prisma: PrismaService,
  ) {}

  @Cron("0 0 * * * *")
  async syncReddit() {
    this.logger.log("🚀 Starting Batched Reddit Sync...");

    const allTasks = Object.entries(subredditsJson).flatMap(([tag, subs]) =>
      Array.isArray(subs) ? subs.map((name) => ({ name, tag })) : [],
    );

    const BATCH_SIZE = 5;
    const WAIT_TIME = 60000;

    for (let i = 0; i < allTasks.length; i += BATCH_SIZE) {
      const batch = allTasks.slice(i, i + BATCH_SIZE);
      this.logger.log(
        `📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}...`,
      );

      await Promise.all(
        batch.map((task) =>
          this.fetchSubreddit(task.name, task.tag).catch((err) =>
            this.logger.error(
              `❌ Error fetching r/${task.name}: ${err.message}`,
            ),
          ),
        ),
      );

      if (i + BATCH_SIZE < allTasks.length) {
        this.logger.log(`⏳ Sleeping for 1 minute to respect rate limits...`);
        await this.sleep(WAIT_TIME);
      }
    }
    this.logger.log("✅ All batches processed.");
  }

  async fetchSubreddit(sub: string, tag: string) {
    const cacheKey = `reddit:${sub}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    const response = await this.http.axiosRef.get(
      `https://www.reddit.com/r/${sub}/hot.json`,
      { headers: { "User-Agent": "DoomDev-Aggregator/1.0" } },
    );

    const redditData = response.data.data.children.map(
      (child: { data: { title: string; url: string } }) => ({
        title: child.data.title,
        url: child.data.url,
      }),
    );

    const results = await Promise.all(
      redditData.map((post: { title: string; url: string }) =>
        this.prisma.post.upsert({
          where: { url: post.url },
          update: {
            tags: { push: tag },
          },
          create: {
            title: post.title,
            url: post.url,
            source: Source.reddit,
            tags: [tag, sub],
          },
        }),
      ),
    );
    this.logger.log(
      `✅ [r/${sub}] Sync complete. Processed ${results.length} posts.`,
    );

    await this.redis.set(cacheKey, JSON.stringify(redditData), 3600);
    return redditData;
  }
}
