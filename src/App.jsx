import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { TodoFooter } from './components/TodoFooter';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import {
	onAdd,
	onDelete,
	onChecked,
	onClearCompleted,
} from './features/todos/todosSlice';

function App() {
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<TodoForm
				onAdd={(text) => {
					dispatch(onAdd(text));
				}}
			/>

			<TodoList
				onChange={(newTodo) => {
					dispatch(onChecked(newTodo));
				}}
				onDelete={(todo) => {
					dispatch(onDelete(todo));
				}}
			/>

			<TodoFooter
				onClearCompleted={() => {
					dispatch(onClearCompleted());
				}}
			/>
		</div>
	);
}

export default App;
