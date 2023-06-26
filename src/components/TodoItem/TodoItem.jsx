/* eslint-disable prettier/prettier */
import { useDispatch } from "react-redux";
import "./TodoItem.css";
import { onChecked, onDelete } from "../../features/todos/todosSlice";

export function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <label className="content">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(event) => {
            const newTodo = {
              ...todo,
              isCompleted: event.target.checked,
            };
            dispatch(onChecked(newTodo));
          }}
        ></input>
        <span>{todo.text}</span>
        <button
          onClick={() => {
						console.log('here')
            dispatch(onDelete(todo));
          }}
        >
          x
        </button>
      </label>
    </div>
  );
}
