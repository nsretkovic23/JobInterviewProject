import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestsController } from "../controllers/tests/tests.controller";
import { TestsService } from "../services/tests/tests.service";
import {TestModel} from '../../../../libs/models/src/lib/testModel/test.model'

@Module({
    imports:[MongooseModule.forFeature([{name:'Test', schema: TestModel}])],
    controllers:[TestsController],
    providers: [TestsService]
})

export class TestModule{}