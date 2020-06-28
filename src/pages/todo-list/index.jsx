import React from "react";
import TodoInput from "@/pages/todo-list/containers/todo-input";
import TodoList from "@/pages/todo-list/containers/todo-list";
import "@/pages/todo-list/index.css";
export default () => {
  return (
    <div className="todo-list-wrapper">
      <h2>REACT HOOK TO DO LIST </h2>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
};
