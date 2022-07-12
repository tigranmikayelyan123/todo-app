import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		onAdd: (state, action) => {
			state.todos.push({
				id: Math.random(),
				text: action.payload,
				isCompleted: false,
			});
			return state;
		},
		onDelete: (state, action) => {
			const newTodos = state.todos.filter(
				(todo) => todo.id !== action.payload.id
			);
			state.todos = newTodos;
		},
		onChecked: (state, action) => {
			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return action.payload;
				}
				return todo;
			});
			state.todos = newTodos;
		},
		onClearCompleted: (state, action) => {
			const newTodos = state.todos.filter((todo) => !todo.isCompleted);
			state.todos = newTodos;
		},
	},
});

export const { onAdd, onDelete, onChecked, onClearCompleted } =
	todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
