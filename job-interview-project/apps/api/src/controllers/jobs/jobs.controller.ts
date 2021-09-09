import { Job } from '@job-interview-project/api-interfaces';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from '../../services/auth/guards/jwt-auth.guard';
import { JobsService } from '../../services/jobs/jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Observable<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<Job> {
    return this.jobsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() job: Job): Promise<Job> {
    return this.jobsService.create(job);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id): Promise<Job> {
    return this.jobsService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Body() updatedJob: Job, @Param('id') id): Promise<Job> {
    return this.jobsService.update(updatedJob, id);
  }
}
