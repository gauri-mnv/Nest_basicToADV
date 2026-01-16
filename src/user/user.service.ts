import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User} from "./user.interface";
@Injectable()
export class UserService {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user: User = {
      id: this.users.length + 1,
      ...dto,
    };

    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: number, data: Partial<CreateUserDto>): User {
    const user = this.findOne(id);
    Object.assign(user, data);
    return user;
  }

  remove(id: number): User {
    const user = this.findOne(id);
    this.users = this.users.filter(u => u.id !== id);
    return user;
  }
}
