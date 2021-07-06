import { Job, Test } from '@job-interview-project/api-interfaces';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('jobs')

export class JobsController {
    @Get()
    findAll() :any {
        return {message:"test find all-get"}
    }

    @Get(':id') //:id-:lat - param.lat, findById(@Param('id) id){return `request with param ${id}`}
    findById(@Param() param) :string {
        return `get request with parameter: ${param.id}`;
    }

    @Post()
    create(@Body() job:Job) :any{
        return {
            jobName:job.jobTitle,
            companyName:job.companyName,
            candidateNumber:job.numberOfCandidates
        }
    }

    @Delete(':id')
    delete(@Param('id') id) :any {
        return {message:`deleted with id: ${id}`}
    }

    @Put(':id')
    update(@Body() updatedJob:Job, @Param('id') id) :any {
        return {
            message:`updated with id: ${id}`,
            jobName:updatedJob.jobTitle,
            company:updatedJob.companyName,
            candidateNumber:updatedJob.numberOfCandidates
        }
    }
}
