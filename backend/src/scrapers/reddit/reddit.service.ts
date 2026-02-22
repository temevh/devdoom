import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedditService {
  constructor(private readonly http: HttpService) {}

  async fetchSubreddit(sub: string) {
    const response = await this.http.axiosRef.get(
      `https://www.reddit.com/r/${sub}/hot.json`,
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data.data.children.map(
      (child: { data: { title: string; url: string } }) => ({
        title: child.data.title,
        url: child.data.url,
      }),
    );
  }
}
