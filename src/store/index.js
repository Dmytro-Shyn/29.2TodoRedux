import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
