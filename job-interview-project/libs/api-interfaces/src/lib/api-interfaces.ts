export interface Message {
  message: string;
}

export interface Job {
    jobTitle:string,
    jobPicture:string,
    companyName:string,
    description:string,
    numberOfCandidates:number,
    lookingFor:string[],
    companyOffers:string[],
    candidates:[{
      username:string,
      email:string,
      grade:number
    }],
    testId:string
}

export interface Test {
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
