import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { RedisModule } from 'redis/redis.module';
import { RedditModule } from 'src/reddit/reddit.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, RedisModule, RedditModule, UserModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
