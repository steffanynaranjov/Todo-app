import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../hooks/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChanged = (event) => {
    setSearchValue(event.target.value);
  }; //de esta forma todoSearch le comunica a App  los cambios

  return (
    <input
      className="TodoSearch"
      placeholder="... Find your task"
      value={searchValue}
      onChange={onSearchValueChanged}
    />
  );
}

export { TodoSearch };
