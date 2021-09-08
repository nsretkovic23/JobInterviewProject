import { Company, User } from '@job-interview-project/api-interfaces';
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('user')
    async userSignUp(@Body() user:User): Promise<User>{
        return this.authService.userSignUp(user);
    }

    @Post('company')
    async companySignUp(@Body() company:Company): Promise<Company>{
        return this.authService.companySignUp(company);
    }
}
