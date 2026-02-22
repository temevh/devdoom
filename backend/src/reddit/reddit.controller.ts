import { Controller, Get, Query } from '@nestjs/common';
import { RedditService } from './reddit.service';

@Controller('reddit')
export class RedditController {
  constructor(private readonly redditService: RedditService) {}

  @Get()
  async getPosts(@Query('sub') sub: string) {
    return this.redditService.fetchSubreddit(sub);
  }
}
