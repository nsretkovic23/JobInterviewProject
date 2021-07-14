import { Injectable } from '@nestjs/common';
import { Job } from '@job-interview-project/api-interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { from, Observable } from 'rxjs';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

  findAll(): Observable<Job[]> {
    return from(this.jobModel.find());
  }

  async findById(id: string): Promise<Job> {
    return await this.jobModel.findOne({ _id: id });
  }

  async create(job: Job): Promise<Job> {
    const newJob = new this.jobModel(job);

    return await newJob.save();
  }

  async delete(id: string): Promise<Job> {
    return await this.jobModel.findByIdAndDelete(id);
  }

  async update(job: Job, id: string): Promise<Job> {
    return await this.jobModel.findByIdAndUpdate(id, job, { new: true });
  }
}
