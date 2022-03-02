import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { CreateToDoDto } from 'server/dto/CreateToDo.dto';
import { UpdateTodoDto } from 'server/dto/UpdateTodo.dto';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';
import { Response } from 'express';

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todo')
  async create(@Body() body: CreateToDoDto, @Res({passthrough: true}) res: Response){
    const newToDo = new Todo();
    newToDo.id = body.id;
    newToDo.content = body.content;
    newToDo.isComplete = body.isComplete;

    try{
      const todo = await this.todosService.create(newToDo);
      return { todo };
    } catch (e) {
      throw new HttpException(`Todo creation failed. ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/updateTodo')
  @Skip(AuthGuard)
  async update(@Body() body:UpdateTodoDto, @Res({passthrough:true}) res: Response){
    try{
      const todo = await this.todosService.update(body.isComplete, body.id);
      return {todo};
    } catch (e){
      throw new HttpException(`Todo update failed. ${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }

}
