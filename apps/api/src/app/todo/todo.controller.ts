import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoRepository } from '@monorepo/dal';
import { TodoEntity } from '@monorepo/shared';

@Controller('todos')
export class TodoController {
  constructor(private todoRepository: TodoRepository) {}

  @Get()
  getTodos(): TodoEntity[] {
    return this.todoRepository.getAll();
  }

  @Post()
  addTodo(@Body() todo: TodoEntity): TodoEntity {
    return this.todoRepository.create(todo);
  }

  @Put(':id')
  updateTodo(@Param('id') _todoId: string, @Body() todo: TodoEntity): TodoEntity {
    return this.todoRepository.update(_todoId, todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') _todoId: string): boolean {
    return this.todoRepository.delete(_todoId);
  }
}
