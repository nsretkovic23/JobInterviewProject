import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { environment } from 'apps/api/src/environments/environment';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.JWT_SECRET,
    });
  }

  // Reverse process, we get access token in signin func by signing payload, 
  // And now we get payload and extract id and username - email in this case
  async validate(payload: any) {
    return { _id: payload.sub, username: payload.username };
  }
}