import { createSlice } from "@reduxjs/toolkit";

import { getTodos } from "@/api/todos";

interface InitialState {
  data: string[];
  error: string | null;
  loading: "succeded" | "rejected" | "pending";
}

const initialState: InitialState = {
  data: [],
  error: "",
  loading: "pending",
};

export const fetchTodos = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    ((builder.addCase(getTodos.pending, (state, action) => {
      state.loading = "pending";
    }),
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = "succeded";
    })),
      builder.addCase(getTodos.rejected, (state, action) => {
        state.data = [];
        ((state.loading = "rejected"),
          (state.error = action.payload as string));
      }));
  },
});


export default fetchTodos.reducer;