import * as mongoose from 'mongoose';

export const JobModel = new mongoose.Schema({
    jobTitle:String,
    jobType:String,
    seniority:String,
    jobPicture:String,
    companyName:String,
    description:String,
    numberOfCandidates:Number,
    lookingFor:[{demands:String}],
    companyOffers:[{offers:String}],
    candidates:[{
        username:String,
        email:String,
        grade:Number
    }],
    testId:String
})
