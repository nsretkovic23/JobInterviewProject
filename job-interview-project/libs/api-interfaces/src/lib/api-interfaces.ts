export interface Message {
  message: string;
}

export interface Job {
    id?:string,
    jobTitle:string,
    jobType:string,
    seniority:string,
    jobPicture:string,
    companyName:string,
    description:string,
    numberOfCandidates:number,
    lookingFor:[{demands:string}],
    companyOffers:[{offers:string}],
    candidates?:[{
      username:string,
      email:string,
      grade:number
    }],
    testId:string
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
