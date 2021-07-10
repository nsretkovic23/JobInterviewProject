import * as mongoose from 'mongoose';

export const JobModel = new mongoose.Schema({
    jobTitle:String,
    jobType:String,
    seniority:String,
    jobPicture:String,
    companyName:String,
    description:String,
    expiryDate:Date,
    lookingFor:String,
    companyOffers:String,
    location:String,
    candidates:[{
        username:String,
        email:String,
        grade:Number
    }],
})
