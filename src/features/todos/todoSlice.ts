import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TodosData } from "../../@type/TodosTypes";

export type Intialstate = {
  todos: string;
};

export const initialState: Intialstate = {
  todos: "",
};

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getAllTodos: build.query<TodosData[], void>({
      query: () => `/todos`,
    }),
  }),
});

export const { useGetAllTodosQuery } = todosApi;
