import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // const newTodo = {
      //   id: Date.now(), // унікальний id
      //   text: action.payload,
      //   completed: false,
      // };
      // state.todos.push(newTodo);
      state.todos.push(action.payload);
    },
    removeFromTodos: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeFromTodos, clearTodos } = TodosSlice.actions;

export default TodosSlice.reducer;
