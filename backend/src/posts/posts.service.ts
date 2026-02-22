import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RedisService } from 'redis/redis.service';
import { RedditService } from 'src/reddit/reddit.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private reddit: RedditService,
  ) {}
  create() {
    return 'This action adds a new post';
  }

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

    // 3. Dynamic Where Clause
    const whereClause =
      cleanTags.length > 0
        ? { tags: { hasEvery: cleanTags } } // Use 'hasEvery' for AND, 'hasSome' for OR logic
        : {};

    const posts = await this.prisma.post.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });

    await this.redis.set(cacheKey, JSON.stringify(posts), 1800);
    return posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
