import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import { Post } from './src/bookmark/post.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '1306',
  database: 'nest',
  entities: [User, Post],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
