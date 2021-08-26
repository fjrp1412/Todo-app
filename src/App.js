import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";

// import "./App.css";

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true,
  },
  {
    text: "Curso de React",
    completed: false,
  },
  {
    text: "Llorar con la llorona",
    completed: false,
  },

  {
    text: "Estudiar React",
    completed: false,
  },

  {
    text: "Hacer proyecto de Django",
    completed: false,
  },

  {
    text: "Hacer proyectos de React",
    completed: false,
  },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
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

      <CreateTodoButton />
    </>
  );
}

export default App;
