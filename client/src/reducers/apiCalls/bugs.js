import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["getBugs"] = (state, action) => action.payload;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: reducerObject,
});

export const { getBugs } = slice.actions;
export default slice.reducer;
