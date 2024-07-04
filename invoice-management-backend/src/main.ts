import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(
    {
      origin: 'http://localhost:3000',
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }
  );
  await app.listen(5000);
}
bootstrap();
