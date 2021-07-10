export interface Message {
  message: string;
}

export interface Job {
    _id?:string,
    jobTitle:string,
    jobType?:string,
    seniority:string,
    jobPicture:string,
    companyName:string,
    description:string,
    expiryDate:Date,
    lookingFor:string
    companyOffers:string,
    location:string,
    candidates?:[{
      username:string,
      email:string,
      grade:number
    }],
}

export interface Test {
    id?:string,
    jobId:string,
    numberOfQuestions:number,
    questions:[{
      questionText:string,
      questionImage:string,
      answerOptions:[{
        option:string
      }],
      rightAnswer:string,
    }]
}
