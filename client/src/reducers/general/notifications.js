import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["addNotification"] = (state, action) => {
  state.push(action.payload);
};
reducerObject["removeNotification"] = (state, action) => {
  const newState = state.filter((notif) => notif.key !== action.payload.key);
  return newState;
};
reducerObject["clearNotifications"] = (state, action) => [];

const slice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: reducerObject,
});

export const { addNotification, removeNotification, clearNotifications } =
  slice.actions;
export default slice.reducer;
