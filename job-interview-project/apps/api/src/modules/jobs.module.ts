import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobsController } from "../controllers/jobs/jobs.controller";
import { JobsService } from "../services/jobs/jobs.service";
import {JobModel} from '../../../../libs/models/src/lib/jobModel/job.model'


@Module({
    imports:[MongooseModule.forFeature([{name:'Job', schema: JobModel}])],
    controllers:[JobsController],
    providers: [JobsService]
})

export class JobsModule{}