import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return this.userService.getUser();
  }

  @Patch("topics")
  @HttpCode(HttpStatus.OK)
  async addTopics(@Body("topic") topic: string) {
    return await this.userService.addTopics(topic);
  }

  @Delete("topics")
  @HttpCode(HttpStatus.ACCEPTED)
  async removeTopic(@Body("topic") topic: string) {
    return await this.userService.removeTopic(topic);
  }
}
