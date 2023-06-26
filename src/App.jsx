/* eslint-disable prettier/prettier */
import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { TodoFooter } from "./components/TodoFooter/TodoFooter";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import {
  onClearCompleted,
} from "./features/todos/todosSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      <TodoFooter
        onClearCompleted={() => {
          dispatch(onClearCompleted());
        }}
      />
    </div>
  );
}

export default App;
