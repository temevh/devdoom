import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RedisService } from 'redis/redis.service';
import { RedditService } from 'src/reddit/reddit.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private reddit: RedditService,
    private userService: UserService,
  ) {}

  async getReddit(source: string | undefined) {
    console.log('source', source);
    return await this.reddit.fetchSubreddit('react');
  }

  async find(tags: string[] = []) {
    const cleanTags = tags
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);

    const cacheKey =
      cleanTags.length > 0
        ? `posts_tags:${cleanTags.sort().join(',')}`
        : 'posts_all';

    const cachedPosts = await this.redis.get(cacheKey);
    if (cachedPosts) {
      console.log('⚡ Serving multi-tag results from cache');
      return JSON.parse(cachedPosts);
    }

    const whereClause =
      cleanTags.length > 0 ? { tags: { hasEvery: cleanTags } } : {};

    const posts = await this.prisma.post.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });

    await this.redis.set(cacheKey, JSON.stringify(posts), 1800);
    return posts;
  }

  async showUserPosts() {
    const topics = this.userService.getUser();
    console.log('Users topics:', topics);
    return topics;
  }
}
