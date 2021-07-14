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

export interface Candidate {
  _id?: string;
  username: string;
  email: string;
}
