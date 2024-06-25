import { ICommand } from "../../../../shared/application/abstraction/ICommand";
import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";

export class deleteTodoUseCase implements ICommand<string> {
  constructor(private todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  async execute(input: string): Promise<void> {
    await this.todoRepository.delete(input);
  }
}
