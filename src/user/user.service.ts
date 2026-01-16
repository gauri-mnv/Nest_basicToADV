import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import{InjectRepository} from "@nestjs/typeorm";
// import { User} from "./user.interface"; 1

import { Repository } from 'typeorm';
//after introducing ORM to my code ...new data tables in relationship
import { User } from './user.entity';

@Injectable()
export class UserService {
  // private users: User[] = [];

  //now...
  //NestJS needs a constructor to know:what to inject ,where to inject it
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
// Repository<User> is created by TypeORM

  // create(dto: CreateUserDto): User {
  //   const user: User = {
  //     id: this.users.length + 1,
  //     ...dto,
  //   };

  //   this.users.push(user);
  //   return user;
  // }

  // findAll(): User[] {
  //   return this.users;
  // }

  // findOne(id: number): User {
  //   const user = this.users.find(u => u.id === id);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   return user;
  // }

  // update(id: number, data: Partial<CreateUserDto>): User {
  //   const user = this.findOne(id);
  //   Object.assign(user, data);
  //   return user;
  // }

  // remove(id: number): User {
  //   const user = this.findOne(id);
  //   this.users = this.users.filter(u => u.id !== id);
  //   return user;
  // }


  // update now adding async to function and promice as database is async and returning promice

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find({
      relations: ['posts'],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['posts'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(
    id: number,
    data: Partial<CreateUserDto>,
  ): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, data);
    return this.userRepo.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return user;
  }
}
