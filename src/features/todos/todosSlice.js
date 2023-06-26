/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./todoAPI";

const initialState = {
  todos: [],
};
export const addAsync = createAsyncThunk("todos/fetchTodo", async (text) => {
  const response = await fetchTodo(text);
  return response.data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      state.todos.push({
        id: Math.random(),
        text: action.payload,
        isCompleted: false,
      });
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
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state, action) => {
        // ...
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.todos.push({
          id: Math.random(),
          text: action.payload,
          isCompleted: false,
        });
      })
      .addCase(addAsync.rejected, (state, action) => {
        // ...
      });
  },
});

export const { onAdd, onDelete, onChecked, onClearCompleted } =
  todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
