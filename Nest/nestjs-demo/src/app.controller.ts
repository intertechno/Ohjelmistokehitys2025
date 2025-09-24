import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new Error("Testi virheestä");
    return this.appService.getHello();
  }

  @Post()
  createHello(): string {
    return "Hello from POST!";
  }
}
