import { Job, Test } from '@job-interview-project/api-interfaces';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JobsService } from '../../services/jobs/jobs.service';

@Controller('jobs')

export class JobsController {
    //dependency injection - using jobsService
    constructor(private readonly jobsService : JobsService){}

    @Get()
    findAll() :Observable<Job[]>{
        return this.jobsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id) :Promise<Job> {
        return this.jobsService.findById(id);
    }

    @Post()
    async create(@Body() job:Job) :Promise<Job>{
        return this.jobsService.create(job);
    }

    @Delete(':id')
    async delete(@Param('id') id) :Promise<Job> {
        return this.jobsService.delete(id);
    }

    @Put(':id')
    async update(@Body() updatedJob:Job, @Param('id') id) :Promise<Job> {
        return this.jobsService.update(updatedJob, id);
    }
}
