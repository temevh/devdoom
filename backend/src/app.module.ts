import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { RedditModule } from './reddit/reddit.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PostsModule, RedditModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
