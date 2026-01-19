import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './user.controller';

describe('UserController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [controller],
    }).compile();

    controller = module.get<UsersController>(controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});TInput extends UsersController = any
