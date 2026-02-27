import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { Topics } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return this.userService.getUser();
  }

  @Patch("topics")
  @HttpCode(HttpStatus.OK)
  async addTopics(@Body() body: { topics: Topics[] }) {
    await this.userService.addTopics({ topics: body.topics });
  }
}
