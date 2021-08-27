import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";

function AppUI(props) {
  return (
    <>
      <TodoCounter total={props.totalTodos} completed={props.completedTodos} />
      <TodoSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />

      <TodoList>
        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={props.toggleCompleteTodo}
            onDelete={props.deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
