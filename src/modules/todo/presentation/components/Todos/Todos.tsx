import React from "react";
import classes from "./Todos.module.css";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "../TodoItem/TodoItem";

const Todos: React.FC = () => {
  const todosContext = React.useContext(TodosContext);

  return (
    <>
      <ul className={classes.todos}>
        {todosContext.items.map((item, index) => {
          return (
            <TodoItem
              key={index}
              data={{ ...item }}
              onClickTodoItem={todosContext.removeTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
