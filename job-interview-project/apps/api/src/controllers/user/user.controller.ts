import { User } from '@job-interview-project/api-interfaces';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }

    @Get('id/:id')
    async findById(@Param('id') id):Promise<User>{
        return this.userService.findById(id);
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email):Promise<User>{
      return this.userService.findByEmail(email);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

    @Delete(':id')
    async delete(@Param('id') id): Promise<User> {
    return this.userService.delete(id);
  }

    @Put(':id')
    async update(@Body() updateduser: User, @Param('id') id): Promise<User> {
    return this.userService.update(updateduser, id);
  }

}
