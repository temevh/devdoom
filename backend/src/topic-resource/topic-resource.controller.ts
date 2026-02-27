import { Controller, Get } from "@nestjs/common";
import { TopicResourceService } from "./topic-resource.service";

@Controller("topic-resource")
export class TopicResourceController {
  constructor(private readonly topicResourceService: TopicResourceService) {}

  @Get()
  async getTopics() {
    return this.topicResourceService.getTopics();
  }
}
