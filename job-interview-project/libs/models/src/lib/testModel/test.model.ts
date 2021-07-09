import * as mongoose from 'mongoose';

export const TestModel = new mongoose.Schema({
    jobId:String,
    numberOfQuestions:Number,
    questions:[{
        questionText:String,
        questionImage:String,
        answerOptions:[{
            option:String
        }],
        rightAnswer:String
    }]
})
