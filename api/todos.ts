import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.message);
      return error?.message;
    }
    return error;
  }
});
