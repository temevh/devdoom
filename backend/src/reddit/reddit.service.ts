import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RedisService } from 'redis/redis.service';
import { PrismaService } from 'prisma/prisma.service';
import { Source } from '@prisma/client';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class RedditService {
  constructor(
    private readonly http: HttpService,
    private redis: RedisService,
    private prisma: PrismaService,
  ) {}

  subs = ['react', 'coding', 'code', 'flutterdev'];

  /*
  @Cron('45 * * * * *')
  async handleCron() {
    console.log('Running cronjob');
    await Promise.all(this.subs.map((sub) => this.fetchSubreddit(sub)));
  }*/

  async fetchSubreddit(sub: string) {
    const cacheKey = `reddit:${sub}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      console.log(`Serving ${sub} from cache`);
      return JSON.parse(cached);
    }

    console.log(`Fetching ${sub} from reddit`);
    const response = await this.http.axiosRef.get(
      `https://www.reddit.com/r/${sub}/hot.json`,
      { headers: { 'User-Agent': 'DoomDev-Aggregator/1.0' } },
    );

    const redditData = response.data.data.children.map(
      (child: { data: { title: string; url: string } }) => ({
        title: child.data.title,
        url: child.data.url,
      }),
    );

    await Promise.all(
      redditData.map((post: { title: string; url: string }) =>
        this.prisma.post.upsert({
          where: { url: post.url },
          update: {
            tags: { push: sub },
          },
          create: {
            title: post.title,
            url: post.url,
            source: Source.reddit,
            tags: [sub],
          },
        }),
      ),
    );

    await this.redis.set(cacheKey, JSON.stringify(redditData), 3600);
    return redditData;
  }
}
