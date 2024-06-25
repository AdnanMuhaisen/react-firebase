import { ICommand } from "../../../../shared/application/abstraction/ICommand";
import Todo from "../../../domain/Todo";
import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";

export class addNewTodoUseCase implements ICommand<string, Todo> {
  constructor(public todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(input: string): Promise<Todo> {
    return await this.todoRepository.addNew({ text: input, id: "" });
  }
}
