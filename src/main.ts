import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Isso faz com que tudo o que não esteja dentro de um dto seja ignorado
      forbidNonWhitelisted: true, // Isso faz com que as propriedades que não estejam dentro do DTO já recuse diretamente a requisição
      transform: true, // já faz a transformação automática do que está sendo esperado no DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
