import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    allBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { allBooks } = bookSlice.actions;

export default bookSlice.reducer;
