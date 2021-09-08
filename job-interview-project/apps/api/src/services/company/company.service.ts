import { Injectable } from '@nestjs/common';
import { Company, Job, User } from '@job-interview-project/api-interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company')private readonly companyModel:Model<Company>){}

    async findAll():Promise<Company[]>{
        return await this.companyModel.find();
    }

    async findById(id:string):Promise<Company>{
        return await this.companyModel.findOne({_id:id});
    }

    async create(company:Company):Promise<Company>{
        const newCompany = new this.companyModel(company);
        
        return await newCompany.save(); 
    }

    async delete(id:string):Promise<Company>{
        return await this.companyModel.findByIdAndDelete(id);
    }

    async update(company:Company, id:string):Promise<Company>{
        return await this.companyModel.findByIdAndUpdate(id, company, {new:true});
    }
}
