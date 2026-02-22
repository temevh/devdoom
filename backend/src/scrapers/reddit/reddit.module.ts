import { Module } from '@nestjs/common';
import { RedditService } from './reddit.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [RedditService],
  exports: [RedditService],
})
export class RedditModule {}
