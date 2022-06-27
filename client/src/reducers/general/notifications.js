import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['addNotification'] = (state, action) => {
  const newItem = { ...action.payload };
  newItem['isActive'] = true;
  state.push(newItem);
};
reducerObject['removeNotification'] = (state, action) => {
  const newState = state.filter((notif) => notif.key !== action.payload.key);
  return newState;
};
reducerObject['deactivateNotification'] = (state, action) => {
  state.forEach((item) => {
    if (item.key === action.payload.key) {
      item.isActive = false;
    }
  });
  return state;
};
reducerObject['clearNotifications'] = (state, action) => [];

const slice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: reducerObject
});

export const { addNotification, removeNotification, deactivateNotification, clearNotifications } =
  slice.actions;
export default slice.reducer;
