import { IQuery } from "../../../../shared/application/abstraction/IQuery";
import Todo from "../../../domain/Todo";
import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";

export class getAllTodosUseCase implements IQuery<undefined, Todo[] | void> {
  constructor(private todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  execute(): Promise<Todo[] | void> {
    return this.todoRepository.getAll();
  }
}
