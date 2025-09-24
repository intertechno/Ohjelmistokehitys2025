import { ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'pino-nestjs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));

  /*
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
    }),
  });
  */
 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
