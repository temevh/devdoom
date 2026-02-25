import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RedisService } from 'redis/redis.service';
import { RedditService } from 'src/reddit/reddit.service';
import { UserService } from 'src/user/user.service';
import { User, Post } from '@prisma/client';

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
    const user: User | null = await this.userService.getUser();
    if (!user) {
      console.log('User not found');
      return [];
    }

    const posts: Post[] = [];
    const getFromDb: string[] = [];

    for (const topic of user.topics) {
      const cacheKey = `posts_tag:${topic}`;
      const cachedPosts = await this.redis.get(cacheKey);

      if (cachedPosts) {
        posts.push(...JSON.parse(cachedPosts));
      } else {
        getFromDb.push(topic);
      }
    }

    if (getFromDb.length > 0) {
      const dbPosts = await this.prisma.post.findMany({
        where: { tags: { hasSome: getFromDb } },
        orderBy: { createdAt: 'desc' },
      });

      await this.backFillCache(getFromDb, dbPosts);
    }

    return posts;
  }

  private async backFillCache(missingTags: string[], posts: Post[]) {
    for (const tag of missingTags) {
      const postsForTag = posts.filter((p) => p.tags.includes(tag));

      if (postsForTag.length > 0) {
        const cacheKey = `posts_tag:${tag}`;
        console.log(`💾 Backfilling cache for tag: ${tag}`);

        // Save to Redis for 30 minutes (1800s)
        await this.redis.set(cacheKey, JSON.stringify(postsForTag), 1800);
      }
    }
  }
}
