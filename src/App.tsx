import NewTodo from "./modules/todo/presentation/components/NewTodo/NewTodo";
import Todos from "./modules/todo/presentation/components/Todos/Todos";
import TodosContextProvider from "./modules/todo/presentation/store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
