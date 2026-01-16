import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3999;

  await app.listen(port ?? 3999);
  console.log(`http://localhost:${port }`);
}
bootstrap();
