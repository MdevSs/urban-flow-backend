import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  
  // Configuração explícita de CORS
  app.enableCors({
    origin: [
      'http://localhost:6969',      // Seu frontend local
      'http://127.0.0.1:6969',      // Alternativa com IP
      // Adicione outras origens conforme necessário (produção, etc)
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,              // Permite cookies/credenciais
    preflightContinue: false,       // Responde preflight automaticamente
  });

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8000);
  console.log(`Launching NestJS app on port ${process.env.PORT}, URL: http://0.0.0.0:${process.env.PORT}`);
}
bootstrap();