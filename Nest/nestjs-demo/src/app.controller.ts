import { Controller, Get, Post, Put, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log("getHello()-metodia kutsuttu");
    throw new Error("Testi virheestä");
    return this.appService.getHello();
  }

  @Post()
  createHello(): string {
    return "Hello from POST!";
  }

  @Put()
  updateHello(): string {
    return "Hello from PUT!";
  }
}
