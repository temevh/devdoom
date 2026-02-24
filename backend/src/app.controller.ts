import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from './posts/posts.service';

@Controller()
export class AppController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts(@Query('tags') tags?: string[]) {
    //return this.postsService.find(tags);
    return 'Test reload';
  }
}
