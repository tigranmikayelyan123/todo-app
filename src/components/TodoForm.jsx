import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsync, addIf4TasksExist } from '../features/todos/todosSlice';

export function TodoForm({ onAdd }) {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	return (
		<form
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
			<button type='button' onClick={() => dispatch(addAsync(text))}>
				Add Async
			</button>
			<button type='button' onClick={() => dispatch(addIf4TasksExist(text))}>
				addIf4TasksExist
			</button>
		</form>
	);
}
