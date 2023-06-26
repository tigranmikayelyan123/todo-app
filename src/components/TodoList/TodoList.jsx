/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux';
import { selectTodos } from '../../features/todos/todosSlice';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css';

export function TodoList() {
	const todos = useSelector(selectTodos);

	return (
		<div>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				);
			})}
		</div>
	);
}
