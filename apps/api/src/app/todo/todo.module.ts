import { TodoRepository } from '@monorepo/dal';
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  providers: [TodoRepository],
  controllers: [TodoController],
})
export class TodoModule {}
