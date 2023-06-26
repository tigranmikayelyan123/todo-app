/* eslint-disable prettier/prettier */
import { useSelector } from "react-redux";
import { onClearCompleted, selectTodos } from "../../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import "./TodoFooter.css";

export function TodoFooter() {
  const todos = useSelector(selectTodos);
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <span>
        {completedTasks}/{todos.length}
      </span>
      <button
        onClick={() => {
          dispatch(onClearCompleted());
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}
