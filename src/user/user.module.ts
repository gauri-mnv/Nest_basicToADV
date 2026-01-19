import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@/Auth/auth.module';
import { BookmarkModule } from '@/bookmark/bookmark.module';


//	Static Modules @Module 
//General application components (e.g., UsersModule).
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    BookmarkModule,
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
