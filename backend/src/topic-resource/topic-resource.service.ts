import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class TopicResourceService {
  constructor(private prisma: PrismaService) {}

  async getTopics() {
    const topics = await this.prisma.topic.findMany();
    console.log("serving topics");
    return topics;
  }
}
