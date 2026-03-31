import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface InitialState {
  todos: Todo[];
  isLoading: boolean;
}

const initialState: InitialState = {
  todos: [],
  isLoading: false,
};

type TodoAction = {
  id: string;
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo(state, action: PayloadAction<TodoAction>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
