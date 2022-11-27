import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

const corsOptionsDelegate = function (req, callback) {
  const corsOptions = {
    origin: false as boolean | string | string[],
    preflightContinue: false,
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };

  if (['dev', 'test', 'local'].includes(process.env.NODE_ENV)) {
    corsOptions.origin = '*';
  } else {
    corsOptions.origin = [process.env.FRONT_BASE_URL];
  }
  callback(null, corsOptions);
};

export async function bootstrap(expressApp?): Promise<INestApplication> {
  let app;
  if (expressApp) {
    app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  } else {
    app = await NestFactory.create(AppModule);
  }
  app.enableCors(corsOptionsDelegate);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (expressApp) {
    await app.init();
  } else {
    await app.listen(PORT);
  }

  Logger.log(`Started application on port ${PORT}`);

  return app;
}
