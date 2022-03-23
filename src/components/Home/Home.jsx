import React from "react";
import { Link } from "react-router-dom";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
const Home = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
