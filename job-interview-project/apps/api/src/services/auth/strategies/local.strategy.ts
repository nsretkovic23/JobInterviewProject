import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
        usernameField: 'userEmail',
        passwordField: 'userPassword'
    });
  }

  async validate(userEmail:string, userPassword:string):Promise<any>{
      const user = await this.authService.validateUser(userEmail, userPassword);

      if(!user)
        throw new UnauthorizedException('Invalid credentials');
    
      return user;
  }
}