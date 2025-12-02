import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  
  // Configuração explícita de CORS
  app.enableCors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8000);
  console.log(`Launching NestJS app on port ${process.env.PORT}, URL: http://0.0.0.0:${process.env.PORT}`);
}
bootstrap();