import React from "react";
import "../styles/TodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="TodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
