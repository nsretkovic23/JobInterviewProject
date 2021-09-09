import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'libs/models/src/lib/companyModel/company.model';
import { UserSchema } from 'libs/models/src/lib/userModel/user.model';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { CompanyService } from '../services/company/company.service';
import { UserService } from '../services/user/user.service';
import { CompanyModule } from './company.module';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '../environments/environment';
import { LocalStrategy } from '../services/auth/strategies/local.strategy';
import { JwtStrategy } from '../services/auth/strategies/jwt-auth.strategy';

@Module({
  imports: [
    CompanyModule,
    UserModule,
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Company', schema: CompanySchema },
    ]),
    JwtModule.register({
      secret: environment.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, CompanyService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
