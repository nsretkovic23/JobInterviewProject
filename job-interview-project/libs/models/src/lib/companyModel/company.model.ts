import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Job } from '@job-interview-project/api-interfaces';
import { JobModel } from '../jobModel/job.model';

export type CompanyDocument = CompanyModel & Document;

@Schema()
export class CompanyModel{
    @Prop({ required: true })
    companyFullName?:string;

    @Prop({ required: true })
    companyEmail?:string;

    @Prop({ required: true })
    companyPassword?:string;

    @Prop()
    companyPicture?:string;

    @Prop()
    companyDescription?:string;

    @Prop()
    companyLocation?:string;

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: JobModel}] })
    companyJobs?: Job[];
}

export const CompanySchema = SchemaFactory.createForClass(CompanyModel);
