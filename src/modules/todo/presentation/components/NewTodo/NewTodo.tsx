import { FC, useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../../store/todos-context";

const NewTodo: FC = (props) => {
  const todosContext = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      // error
      return;
    }

    todosContext.addTodo(enteredText as string);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todoText">Todo Text:</label>
      <input type="text" id="todoText" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
