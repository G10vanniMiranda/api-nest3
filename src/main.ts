import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule, {cors: true} );
  // app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  

  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();