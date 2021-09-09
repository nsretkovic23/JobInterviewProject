import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { Company, User } from '@job-interview-project/api-interfaces';
import { CompanyService } from '../company/company.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    // HACK: Could've been done with Injecting company/user mongoDB models and using DTO's as a function parameters
    constructor(private userService:UserService, private companyService:CompanyService, private jwtService:JwtService){}

    async userSignUp(user:User):Promise<User>{
        const hashedPassword = await bcrypt.hash(user.userPassword, 10);

        const newUser : User = {...user, userPassword:hashedPassword};

        try{
            return this.userService.create(newUser);
        }
        catch(error){
            throw new Error("Error USER signing up!");
        }
    }

    async companySignUp(company:Company):Promise<Company>{
        const hashedPassword = await bcrypt.hash(company.companyPassword, 10);

        const newCompany:Company = {...company, companyPassword:hashedPassword};
        
        try{
            return this.companyService.create(newCompany);
        }
        catch(error){
            throw new Error("Error COMPANY signing up!");
        }
    }

    async validateUser(userEmail:string, userPassword:string){
        const user = await this.userService.findByEmail(userEmail);

        if(!user)
            return null;
        
        const isValid = await bcrypt.compare(userPassword, user.userPassword);

        if(isValid)
            return user;

        return null;
    }

    // Controller calls this after running through the guard
    async userSignIn(user:User){
        // TODO: Try adding isUser:true to the payload
        const payload = {username:user.userEmail, sub: user._id};

        return{
            accessToken: this.jwtService.sign(payload),
            user
        };
    }

    async getLoggedInUser(id:string):Promise<User>{
        return this.userService.findById(id);
    }
}
