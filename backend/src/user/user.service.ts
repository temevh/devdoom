import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser() {
    const user = await this.prisma.user.findFirst();
    console.log("user", user);
    return user;
  }

  async addTopics( topic ) {
    const user = await this.prisma.user.findUnique({
      where: { id: 1 },
    });
    console.log(topic)

    if (!user) throw new NotFoundException("User not found");

    const updatedTopics = Array.from(new Set([...user.topics, topic]));
    return this.prisma.user.update({
      where: { id: 1 },
      data: { topics: { set: updatedTopics } },
    });
  }
}
