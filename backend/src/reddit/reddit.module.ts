import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedditService } from './reddit.service';
import { RedisModule } from 'redis/redis.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [HttpModule, RedisModule, PrismaModule],
  providers: [RedditService],
  exports: [RedditService],
})
export class RedditModule {}
