import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const {
    error,
    loading,
    searchedTodos,
    onError,
    onLoading,
    onEmptyTodos,
    render,
    totalTodos,
    onEmptySearchResults,
    searchValue,
    children,
  } = props;

  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchValue)}

      {!loading && searchedTodos.map(render || children)}
    </section>
  );
}

export { TodoList };
