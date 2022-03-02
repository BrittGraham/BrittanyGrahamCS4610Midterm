import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  create(newToDo: Todo) {
    return this.todosRepository.save(newToDo);
  }

  update(newStatus: boolean, newwId: number){
    return this.todosRepository.update( {isComplete: newStatus}, {id: newwId} )
  }
}
