import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll(tag?: string) {
    return this.prisma.post.findMany({
      where: {
        tags: tag 
          ? { hasSome: [tag] } 
          : {},              
      },
      orderBy: { createdAt: 'desc' },
    });
  }
  findByTag(tag: string){
    return this.prisma.post.findMany({where: {tags: tag ? {hasSome: [tag]} : {},}})
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
