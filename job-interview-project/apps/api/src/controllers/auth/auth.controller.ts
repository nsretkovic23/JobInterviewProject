import { Company, User } from '@job-interview-project/api-interfaces';
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Request,
    UseGuards,
    Body,
  } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { JwtAuthGuard } from '../../services/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../../services/auth/guards/local-auth.guard';
import { UserService } from '../../services/user/user.service';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('user/signup')
    async userSignUp(@Body() user:User): Promise<User>{
        return this.authService.userSignUp(user);
    }

    @UseGuards(LocalAuthGuard)
    @Post('user/signin')
    async userSignIn(@Request() req){
        return this.authService.userSignIn(req.user);
    }

    @Post('company/signup')
    async companySignUp(@Body() company:Company): Promise<Company>{
        return this.authService.companySignUp(company);
    }

    // Test function - works
    @UseGuards(JwtAuthGuard)
    @Get('user/me')
    async testUserGetMe(@Request() req):Promise<User>{
        return this.authService.getLoggedInUser(req.user?._id);
    }

}
