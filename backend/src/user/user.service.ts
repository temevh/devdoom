import { Injectable, NotFoundException } from "@nestjs/common";
import { Topics } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser() {
    const user = await this.prisma.user.findFirst();
    console.log("user", user);
    return user;
  }

  async addTopics({ topics }: { topics: Topics[] }) {
    const user = await this.prisma.user.findUnique({
      where: { id: 1 },
    });

    if (!user) throw new NotFoundException("User not found");

    const updatedTopics = Array.from(new Set([...user.topics, ...topics]));
    return this.prisma.user.update({
      where: { id: 1 },
      data: { topics: { set: updatedTopics } },
    });
  }
}
