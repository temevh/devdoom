import { Module } from "@nestjs/common";
import { TopicResourceService } from "./topic-resource.service";
import { TopicResourceController } from "./topic-resource.controller";
import { PrismaModule } from "prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TopicResourceController],
  providers: [TopicResourceService],
})
export class TopicResourceModule {}
