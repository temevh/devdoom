import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { RedditController } from './reddit/reddit.controller';
import { RedditModule } from './reddit/reddit.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PostsModule, RedditModule, ScheduleModule.forRoot()],
  controllers: [AppController, RedditController],
  providers: [AppService],
})
export class AppModule {}
