import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'prisma/prisma.service';
import { RedisService } from 'redis/redis.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll(tag?: string) {
    const cacheKey = `post:${tag ?? 'all'}`;

    const cachedPosts = await this.redis.get(cacheKey);
    if (cachedPosts) {
      console.log('⚡ Posts found from cache');
      return JSON.parse(cachedPosts);
    }

    const posts = await this.prisma.post.findMany({
      where: {
        tags: tag ? { hasSome: [tag] } : {},
      },
      orderBy: { createdAt: 'desc' },
    });

    await this.redis.set(cacheKey, JSON.stringify(posts), 1800);
    console.log(`🐘 Fetched from DB and cached for tag: ${tag}`);
    return posts;
  }
  findByTag(tag: string) {
    return this.prisma.post.findMany({
      where: { tags: tag ? { hasSome: [tag] } : {} },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
