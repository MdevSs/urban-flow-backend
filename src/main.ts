import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8000);
  console.log(`Launching NestJS app on port ${process.env.PORT}, URL: http://0.0.0.0:${process.env.PORT}`);
}
bootstrap();