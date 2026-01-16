import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Validation Pipe (Clean & Stable APIs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // removes unknown fields
      forbidNonWhitelisted: true,   // throws error for extra fields
      transform: true,              // auto-convert types (string → number)
    }),
  );

  //  Global Exception Filter (Consistent error response)
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3999;
  await app.listen(port);

  console.log(` Server running at http://localhost:${port}`);
}

bootstrap();
