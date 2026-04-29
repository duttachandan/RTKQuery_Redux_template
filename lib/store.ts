import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, useStore } from "react-redux";
import todoReducer from "@/lib/features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

