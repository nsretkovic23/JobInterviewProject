import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { JobModel } from '../jobModel/job.model';
import { Job } from '@job-interview-project/api-interfaces';


export type UserDocument = UserModel & Document;

@Schema()
export class UserModel{
    @Prop({ required: true })
    userFullName?:string;

    @Prop({ required: true,type:String , unique:true})
    userEmail?:string;

    @Prop({ required: true })
    userPassword?:string;

    @Prop()
    userPicture?:string;

    @Prop()
    userDescription?:string;

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: JobModel}] })
    jobsApplied?: Job[]; 
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
