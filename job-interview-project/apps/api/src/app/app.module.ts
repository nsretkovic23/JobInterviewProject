import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { MongoClient } from 'mongodb';
import { JobsModule } from '../modules/jobs.module';
import { TestModule } from '../modules/tests.module';

@Module({
  imports: [JobsModule, TestModule, MongooseModule.forRoot(environment.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
