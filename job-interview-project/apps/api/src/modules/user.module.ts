import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {UserSchema} from '../../../../libs/models/src/lib/userModel/user.model';
import { UserController } from "../controllers/user/user.controller";
import { UserService } from "../services/user/user.service";


@Module({
    imports:[MongooseModule.forFeature([{name:'User', schema: UserSchema}])],
    controllers:[UserController],
    providers: [UserService]
})

export class UserModule{}