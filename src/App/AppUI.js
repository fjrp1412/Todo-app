import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    toggleCompleteTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hubo un error en la aplicación...</p>}
        {loading && <p>Estamos cargando la aplicación</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={toggleCompleteTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}

export { AppUI };
