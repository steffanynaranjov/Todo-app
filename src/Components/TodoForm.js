import React from "react";
import "../styles/TodoForm.css";
import { TodoContext } from "../hooks/TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add your new To-do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        name=""
        placeholder="Clean house"
      />
      <div className="TodoForm-buttonContainer TodoForm-button-cancel">
        <button className="TodoForm-button" onClick={onCancel} type="button">
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
