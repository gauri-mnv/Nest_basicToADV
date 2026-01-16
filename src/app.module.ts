import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Post } from './bookmark/post.entity';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
//similar to app.js or app.ts file in react 

@Module({
  imports:
  [     // 1️⃣ Environment variables
    
    ConfigModule.forRoot({
    isGlobal: true, // 👈 important
  }),
   // 2️⃣ Database connection
   TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: Number(config.get('DB_PORT')),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      entities: [User, Post],
      synchronize: false,
    }),
  }),

   // 3️⃣ Feature modules
    AuthModule, 
    UserModule, 
    BookmarkModule],

})
export class AppModule {}
