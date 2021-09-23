import React from "react";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}
export { TodoSearch };
