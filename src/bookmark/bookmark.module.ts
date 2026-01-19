import { DynamicModule, forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {AuthModule  } from "../Auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Post, User]),
  forwardRef(() => AuthModule),
],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class BookmarkModule {
  static register(enableLogs = false):DynamicModule {

    return{
      module :BookmarkModule,
      providers: [PostService,
        {
          provide: 'ENABLE_LOGS',
          useValue: enableLogs,
        },
      ],
      exports: [PostService],
    }
  }
}
