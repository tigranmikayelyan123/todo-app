import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todos/todosSlice';
import { TodoItem } from './TodoItem';

export function TodoList({ onChange, onDelete }) {
	const todos = useSelector(selectTodos);

	return (
		<div>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onChange={onChange}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
}
