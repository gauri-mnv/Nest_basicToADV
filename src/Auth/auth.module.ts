import { Module, forwardRef } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "@/user/auth.gaurd";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "@/user/user.entity";
import { UserModule } from '@/user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
          secret: 'JWT_SECRET_KEY',
          signOptions: { expiresIn: '1h' },
        }),
        forwardRef(() => UserModule),
      ],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [JwtModule, AuthGuard, AuthService],})

    
export class AuthModule {

}
