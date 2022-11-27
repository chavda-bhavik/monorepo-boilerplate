import { Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { TodoModule } from 'app/todo/todo.module';

const modules: Array<Type> = [TodoModule];

const providers = [];

@Module({
  imports: modules,
  controllers: [],
  providers,
})
export class AppModule {}
