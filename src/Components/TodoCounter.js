import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../hooks/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      You have completed {completedTodos} the {totalTodos} to-do
    </h2>
  );
}

export { TodoCounter };
