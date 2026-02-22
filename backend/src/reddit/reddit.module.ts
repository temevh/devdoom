import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedditController } from './reddit.controller';
import { RedditService } from './reddit.service';
import { RedisModule } from 'redis/redis.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [HttpModule, RedisModule, PrismaModule],
  controllers: [RedditController],
  providers: [RedditService],
  exports: [RedditService],
})
export class RedditModule {}
