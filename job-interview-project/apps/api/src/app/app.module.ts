import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { JobsModule } from '../modules/jobs.module';
import { UserModule } from '../modules/user.module';
import { CompanyModule } from '../modules/company.module';
import { AuthModule } from '../modules/auth.module';

@Module({
  imports: [AuthModule, JobsModule, UserModule, CompanyModule, MongooseModule.forRoot(environment.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
