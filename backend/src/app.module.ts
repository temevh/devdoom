import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { RedditModule } from './reddit/reddit.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './user/user.module';
import { HackernewsModule } from './hackernews/hackernews.module';

@Module({
  imports: [
    PostsModule,
    RedditModule,
    ScheduleModule.forRoot(),
    UserModule,
    HackernewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
