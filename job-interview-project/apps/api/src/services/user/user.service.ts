import { Injectable } from '@nestjs/common';
import { Job, User } from '@job-interview-project/api-interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>){}

    async findAll():Promise<User[]>{
        return await this.userModel.find();
    }

    async findById(id:string):Promise<User>{
        return await this.userModel.findOne({_id:id});
    }

    async findByEmail(userEmail:string):Promise<User>{
        return await this.userModel.findOne({userEmail});
    }

    async create(user:User):Promise<User>{
        // TODO: Check if there is no profile picture provided and provide default
        const newUser = new this.userModel(user);
        
        return await newUser.save(); 
    }

    async delete(id:string):Promise<User>{
        return await this.userModel.findByIdAndDelete(id);
    }

    async update(user:User, id:string):Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, {new:true});
    }
}
