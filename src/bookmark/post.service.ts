import { Injectable, NotFoundException, ForbiddenException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @Inject('ENABLE_LOGS') private enableLogs: boolean,
    ) 
    {
      if (this.enableLogs) {
        console.log('📌 Bookmark logging enabled');
      }
    }
   

  async createForUser(userId: number, title: string): Promise<Post> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const post = this.postRepo.create({ title, user });
    return this.postRepo.save(post);
  }

  async updateForUser(userId: number, postId: number, title: string): Promise<Post> {
    const post = await this.postRepo.findOne({
      where: { id: postId },
      relations: ['user'],
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (post.user.id !== userId) {
      throw new ForbiddenException('You can update only your own posts');
    }

    post.title = title;
    return this.postRepo.save(post);
  }
}

