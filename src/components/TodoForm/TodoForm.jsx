/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsync } from "../../features/todos/todosSlice";
import { onAdd } from "./../../features/todos/todosSlice.js";
import "./TodoForm.css";

export function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form
        className="header"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(onAdd(text));
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
        <button
          type="button"
          onClick={() => {
            dispatch(addAsync(text));
            setText("");
          }}
        >
          Add Async
        </button>
      </form>
    </div>
  );
}
