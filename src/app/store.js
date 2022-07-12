import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/todos/todosSlice';

export const store = configureStore({
	reducer: appReducer,
});
