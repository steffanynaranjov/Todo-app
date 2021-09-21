import React from "react";
import { Header } from "./Components/Header";
import { TodoContext } from "./hooks/TodoContext";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { TodosError } from "./statusPage/TodosError";
import { TodosLoading } from "./statusPage/TodosLoading";
import { EmptyTodos } from "./statusPage/EmptyTodos";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { Modal } from "./Components/Modal";
import { TodoForm } from "./Components/TodoForm";
import { Footer } from "./Components/Footer";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Header />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <Footer />
    </React.Fragment>
  );
}

export { AppUI };
