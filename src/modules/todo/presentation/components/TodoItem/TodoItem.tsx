import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  data: { text: string; id: string };
  onClickTodoItem: (id: string) => void;
}> = (props) => {
  return (
    <>
      <li
        className={classes.item}
        onClick={() => props.onClickTodoItem(props.data.id)}
      >
        <p>{props.data.text}</p>
        <p className={classes.delete}>Press To Delete</p>
      </li>
    </>
  );
};

export default TodoItem;
