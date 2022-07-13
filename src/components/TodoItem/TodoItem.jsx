import './TodoItem.css';

export function TodoItem({ todo, onChange, onDelete }) {
	return (
		<div>
			<label className='content'>
				<input
					type='checkbox'
					checked={todo.isCompleted}
					onChange={(event) => {
						onChange({
							...todo,
							isCompleted: event.target.checked,
						});
					}}
				></input>
				<span>{todo.text}</span>
				<button
					onClick={() => {
						onDelete(todo);
					}}
				>
					x
				</button>
			</label>
		</div>
	);
}
