import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { Company, User } from '@job-interview-project/api-interfaces';
import { CompanyService } from '../company/company.service';

@Injectable()
export class AuthService {
    // HACK: Could've been done with Injecting company/user mongoDB models and using DTO's as a function parameters
    constructor(private userService:UserService, private companyService:CompanyService){}

    async userSignUp(user:User):Promise<User>{
        const hashedPassword = await bcrypt.hash(user.userPassword, 10);

        const newUser : User = {...user, userPassword:hashedPassword};

        try{
            return await this.userService.create(newUser);
        }
        catch(error){
            throw new Error("Error USER signing up!");
        }
    }

    async companySignUp(company:Company):Promise<Company>{
        const hashedPassword = await bcrypt.hash(company.companyPassword, 10);

        const newCompany:Company = {...company, companyPassword:hashedPassword};
        
        try{
            return await this.companyService.create(newCompany);
        }
        catch(error){
            throw new Error("Error COMPANY signing up!");
        }
    }
}
