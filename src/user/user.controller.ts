import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

import { ParseIntPipe } from '@nestjs/common';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

//   @Get(':id')
//   getUser(@Param('id') id: string) {
//     return this.usersService.findOne(id);
//   }

// @Put(':id')
//   updateUser(@Param('id') id: string, @Body() data: any) {
//     return this.usersService.update(id, data);
//   }

//   @Delete(':id')
//   deleteUser(@Param('id') id: string) {
//     return this.usersService.remove(id);
//   }

  @Get(':id')
getUser(@Param('id', ParseIntPipe) id: number) {
  return this.usersService.findOne(id);
}

@Put(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
  
  
}
