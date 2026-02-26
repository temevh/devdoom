import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Source } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class HackernewsService {
  private readonly logger = new Logger(HackernewsService.name);

  constructor(
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  @Cron(CronExpression.EVERY_2_HOURS)
  async syncHackerNews() {
    this.logger.log('Starting HackerNews sync...');

    const { data: topIds } = await this.http.axiosRef.get<number[]>(
      'https://hacker-news.firebaseio.com/v0/topstories.json',
    );

    const top20 = topIds.slice(0, 20);

    for (const id of top20) {
      const { data: story } = await this.http.axiosRef.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      );

      if (story && story.url) {
        await this.prisma.post.upsert({
          where: { url: story.url },
          update: {},
          create: {
            title: story.title,
            url: story.url,
            source: Source.hackernews,
            tags: ['hackernews', 'tech'],
            createdAt: new Date(story.time * 1000),
          },
        });
      }
    }
    this.logger.log('Hackernews sync complete');
  }
}
