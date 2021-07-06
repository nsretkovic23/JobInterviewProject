import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from '../controllers/jobs/jobs.controller';
import { TestsController } from '../controllers/tests/tests.controller';

@Module({
  imports: [],
  controllers: [AppController, JobsController, TestsController],
  providers: [AppService],
})
export class AppModule {}
