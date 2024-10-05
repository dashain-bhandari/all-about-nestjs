import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


//DATABASE_URL="postgresql://nesttry_owner:CqXhlFTnQ8i5@ep-steep-pine-a51k1mta-pooler.us-east-2.aws.neon.tech/nesttry?sslmode=require"