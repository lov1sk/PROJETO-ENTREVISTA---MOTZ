import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('motz-api');

  const PORT = process.env.PORT ?? 3232;
  await app.listen(PORT);
}
bootstrap();
