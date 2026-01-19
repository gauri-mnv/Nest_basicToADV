import { Injectable, UnauthorizedException ,OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService implements OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown{
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  onModuleInit() {
    console.log('AuthService initialized');

    // Example: Validate JWT configuration
    try {
      this.jwtService.sign({ test: true });
      console.log('JWT configuration validated');
    } catch (error) {
      console.error(' JWT configuration error', error);
    }
  }

  //  Runs when AuthModule is destroyed
  onModuleDestroy() {
    console.log(' AuthService resources cleaned up');
  }

  // Runs just before the app shuts down
  beforeApplicationShutdown(signal: string) {
    console.log(`AuthService shutting down due to: ${signal}`);
  }

  // Handle user signup with hashed password and JWT token response
  async signup(dto: SignupDto) {
    const user = await this.userService.create(dto);

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Signup successful',
      access_token: token,
    };
  }

  async signin(dto: SigninDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Signin successful',
      access_token: token,
    };
  }
}

