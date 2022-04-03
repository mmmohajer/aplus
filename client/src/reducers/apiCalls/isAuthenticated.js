import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["authenticated"] = (state, action) => true;
reducerObject["notAuthenticated"] = (state, action) => false;

const slice = createSlice({
  name: "isAuthenticated",
  initialState: false,
  reducers: reducerObject,
});

export const { authenticated, notAuthenticated } = slice.actions;
export default slice.reducer;
