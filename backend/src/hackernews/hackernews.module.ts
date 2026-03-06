import { Module } from "@nestjs/common";
import { HackernewsService } from "./hackernews.service";

import { PrismaModule } from "prisma/prisma.module";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [HackernewsService],
  exports: [HackernewsService],
})
export class HackernewsModule {}
