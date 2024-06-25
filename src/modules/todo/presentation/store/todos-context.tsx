import React, { useEffect } from "react";
import Todo from "../../domain/Todo";
import { TodoRepository } from "../../infrastructure/repositories/TodoRepository";
import { db } from "../../../shared/infrastructure/firebase/services/firestoreService";
import { addNewTodoUseCase } from "../../application/useCases/commands/addNewTodoUseCase";
import { deleteTodoUseCase } from "../../application/useCases/commands/deleteTodoUseCase";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// describe you context object in generic create context function
export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const todoRepository = new TodoRepository(db);

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // use generic useState to infer the type of data
  const [todos, setTodos] = React.useState<Todo[]>([]);

  useEffect(() => {
    async function getAllTodos() {
      setTodos(await todoRepository.getAll());
    }
    getAllTodos();
  }, []);

  const addToDoHandler: (text: string) => void = async (text: string) => {
    const addedTodoItem = await new addNewTodoUseCase(todoRepository).execute(
      text
    );
    setTodos((previousTodos) => previousTodos.concat(addedTodoItem));
  };

  const onDeleteHandler = async (id: string): Promise<void> => {
    await new deleteTodoUseCase(todoRepository).execute(id);
    setTodos((previousTodos) => {
      return (previousTodos = previousTodos.filter((item) => item.id !== id));
    });
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: onDeleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
