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
<<<<<<< HEAD
  updateTopics(@Request() req, @Body() body: { topics: string[] }) {
    console.log(`Updating topics for user`, body.topics);
=======
  @HttpCode(HttpStatus.OK)
  async addTopics(@Body("topic") topic: string) {
    return await this.userService.addTopics(topic);
  }

  @Delete("topics")
  @HttpCode(HttpStatus.ACCEPTED)
  async removeTopic(@Body("topic") topic: string) {
    return await this.userService.removeTopic(topic);
>>>>>>> ed31cd5eb5f3aafcb8d992aa4f1224451f95890f
  }
}
