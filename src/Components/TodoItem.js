import React from "react";
import "../styles/TodoItem.css";
import iconCheck from "../img/icon-chek.png";
import iconDelete from "../img/icon-trash.png";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <img
        src={iconCheck}
        alt="icon check"
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <img
        className="Icon Icon-delete"
        src={iconDelete}
        alt="Delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
