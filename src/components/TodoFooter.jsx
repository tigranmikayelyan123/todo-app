import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todos/todosSlice';

export function TodoFooter({ onClearCompleted }) {
	const todos = useSelector(selectTodos);
	const completedTasks = todos.filter((todo) => todo.isCompleted).length;

	return (
		<div>
			<span>
				{completedTasks}/{todos.length}
			</span>
			<button onClick={onClearCompleted}>Clear Completed</button>
		</div>
	);
}
