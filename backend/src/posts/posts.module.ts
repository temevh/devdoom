import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { RedisModule } from 'redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
