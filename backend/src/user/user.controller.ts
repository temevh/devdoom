import { Body, Controller, Get, Param, Patch, Request } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return this.userService.getUser();
  }

  @Patch("topics")
  updateTopics(@Request() req, @Body() body: { topics: string[] }) {
    console.log(`Updating topics for user`, body.topics);
  }
}
