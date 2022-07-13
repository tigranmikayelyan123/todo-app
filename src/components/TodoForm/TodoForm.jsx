import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsync, addIf4TasksExist } from '../../features/todos/todosSlice';
import './TodoForm.css';

export function TodoForm({ onAdd }) {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	return (
		<div>
			<form
				className='header'
				onSubmit={(event) => {
					event.preventDefault();
					onAdd(text);
					setText('');
				}}
			>
				<input
					type='text'
					value={text}
					onChange={(event) => {
						setText(event.target.value);
					}}
				></input>
				<button type='submit'>Add</button>
				<button
					type='button'
					onClick={() => {
						dispatch(addAsync(text));
						setText('');
					}}
				>
					Add Async
				</button>
				<button
					type='button'
					onClick={() => {
						dispatch(addIf4TasksExist(text));
						setText('');
					}}
				>
					addIf4TasksExist
				</button>
			</form>
		</div>
	);
}
