import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts(@Query('tags') tags?: string[]) {
    return this.postsService.find(tags);
  }
}
