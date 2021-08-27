import React from "react";
import { AppUI } from "./AppUI";

// import "./App.css";

// const defaultTodos = [
//   {
//     text: "Cortar cebolla",
//     completed: true,
//   },
//   {
//     text: "Curso de React",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: false,
//   },

//   {
//     text: "Estudiar React",
//     completed: false,
//   },

//   {
//     text: "Hacer proyecto de Django",
//     completed: false,
//   },

//   {
//     text: "Hacer proyectos de React",
//     completed: false,
//   },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedTodos;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedTodos = initialValue;
  } else {
    parsedTodos = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedTodos);
  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return [item, saveItem];
}

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
