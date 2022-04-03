import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["getProfile"] = (state, action) => {
  return action.payload;
};
reducerObject["removeProfile"] = (state, action) => {
  return {};
};

const slice = createSlice({
  name: "profile",
  initialState: [],
  reducers: reducerObject,
});

export const { getProfile, removeProfile } = slice.actions;
export default slice.reducer;
