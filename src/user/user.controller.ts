import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from './auth.gaurd';
import { UserGaurd } from './user.guard';


@Controller('user')
// @UseGuards(new AuthGuard()) if I will add this guard here then it will work for all the routes
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('signup')
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  // Admin-only: list all users with their posts (guarded by simple header-based guard)
  @UseGuards(new UserGaurd())
  @Get()
  getUsers() {
    console.log("users");
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


//ParseIntPipe 
//Pipes transform and validate request data before it reaches the controller
  @UseGuards(new UserGaurd())
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
