import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { RedditModule } from './reddit/reddit.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './user/user.module';
import { HackernewsModule } from './hackernews/hackernews.module';
import { TopicResourceModule } from './topic-resource/topic-resource.module';

@Module({
  imports: [
    PostsModule,
    RedditModule,
    ScheduleModule.forRoot(),
    UserModule,
    HackernewsModule,
    TopicResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
