import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
//similar to app.js or app.ts file in react 

@Module({
  imports:
  [ ConfigModule.forRoot({
    isGlobal: true, // 👈 important
  }),
    AuthModule, 
    UserModule, 
    BookmarkModule],

})
export class AppModule {}
