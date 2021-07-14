import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { JobsModule } from '../modules/jobs.module';

@Module({
  imports: [JobsModule, MongooseModule.forRoot(environment.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
