export function TodoItem({ todo, onChange, onDelete }) {
	return (
		<div>
			<label>
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
				{todo.text}
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
