export interface Message {
  message: string;
}

export interface Job {
  _id?: string;
  jobTitle: string;
  jobType?: string;
  seniority: string;
  jobPicture: string;
  companyName: string;
  description: string;
  expiryDate: Date;
  lookingFor: string;
  companyOffers: string;
  location: string;
  candidates?: Candidate[];
}

export interface User{
  _id?:string;
  userFullName:string;
  userEmail:string;
  userPassword:string;
  userPicture:string;
  userDescription:string;
  jobsApplied:Job[];
}

export interface Company{
  _id?:string;
  companyFullName:string;
  companyEmail:string;
  companyPassword:string;
  companyPicture:string;
  companyDescription:string;
  companyLocation:string;
  companyJobs:Job[];
}

export interface Candidate {
  userId?: string;
  username: string;
  email: string;
}
