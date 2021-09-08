import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {CompanySchema} from '../../../../libs/models/src/lib/companyModel/company.model'
import { CompanyController } from "../controllers/company/company.controller";
import { CompanyService } from "../services/company/company.service";


@Module({
    imports:[MongooseModule.forFeature([{name:'Company', schema: CompanySchema}])],
    controllers:[CompanyController],
    providers: [CompanyService]
})

export class CompanyModule{}