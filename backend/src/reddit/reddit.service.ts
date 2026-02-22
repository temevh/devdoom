import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RedisService } from 'redis/redis.service';

@Injectable()
export class RedditService {
  constructor(
    private readonly http: HttpService,
    private redis: RedisService,
  ) {}

  async fetchSubreddit(sub: string) {
    const cacheKey = `reddit:${sub}`;
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      console.log(`Serving ${sub} from cache`);
      return JSON.parse(cached);
    } else {
      console.log(`Fetching ${sub} from reddit`);
      const response = await this.http.axiosRef.get(
        `https://www.reddit.com/r/${sub}/hot.json`,
      );
      const data = response.data.data.children.map(
        (child: { data: { title: string; url: string } }) => ({
          title: child.data.title,
          url: child.data.url,
        }),
      );
      await this.redis.set(cacheKey, JSON.stringify(data), 3600);
      return data;
    }
  }
}
