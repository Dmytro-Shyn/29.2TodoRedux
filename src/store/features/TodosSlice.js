import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromTodos: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const { addTodo, removeFromTodos, clearTodos } = TodosSlice.actions;

export default TodosSlice.reducer;
