import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// import "./App.css";

function App() {
  const [state, setState] = React.useState("Estado compartido");
  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({ children }) {
  return <section className="TodoList-container">{children}</section>;
}

function TodoCounter() {
  return <p>TodoCunter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({ state }) {
  return <p>{state}</p>;
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
