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
import { CompanyService } from '../../services/company/company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){}

    @Get()
    findAll():Promise<Company[]>{
        return this.companyService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id):Promise<Company>{
        return this.companyService.findById(id);
    }

    @Post()
    async create(@Body() company: Company): Promise<Company> {
    return this.companyService.create(company);
  }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Company> {
    return this.companyService.delete(id);
  }

    @Put(':id')
    async update(@Body() updatedcompany: Company, @Param('id') id): Promise<Company> {
    return this.companyService.update(updatedcompany, id);
  }

}
