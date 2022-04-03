import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["login"] = (state, action) => action.payload;

const slice = createSlice({
  name: "auth",
  initialState: [],
  reducers: reducerObject,
});

export const { login } = slice.actions;
export default slice.reducer;
