/* eslint-disable prettier/prettier */
import React from "react";
import { TodoFooter } from "./components/TodoFooter/TodoFooter";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
