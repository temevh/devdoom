import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { RedditController } from './reddit/reddit.controller';
import { RedditModule } from './reddit/reddit.module';
@Module({
  imports: [PostsModule, RedditModule],
  controllers: [AppController, RedditController],
  providers: [AppService],
})
export class AppModule {}
