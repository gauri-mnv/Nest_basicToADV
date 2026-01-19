import { Body, Controller, Post as HttpPost, Put, Param, UseGuards, Req, Patch, UseInterceptors } from '@nestjs/common';
import express from 'express';
import { PostService } from './post.service';
import { AuthGuard } from '../user/auth.gaurd';
import { PostInterceptor } from './post.interceptor';

@Controller('posts')

export class PostController {
  constructor(private readonly postService: PostService) {}

  // Create a post as the currently logged-in user
  @UseGuards(AuthGuard)
  @HttpPost()
  @UseInterceptors(PostInterceptor)
  createPost(@Body('title') title: string, @Req() req: express.Request) {
    const user = req['user'];
    return this.postService.createForUser(user.sub, title);
  }

  // Update a post as the currently logged-in user (only own posts)
  @UseGuards(AuthGuard)
  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body('title') title: string,
    @Req() req: express.Request,
  ) {
    const user = req['user'];
    return this.postService.updateForUser(user.sub, Number(id), title);
  }
}

