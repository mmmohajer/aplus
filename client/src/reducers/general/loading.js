import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['isLoading'] = (state, action) => true;
reducerObject['isLoaded'] = (state, action) => false;

const slice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: reducerObject
});

export const { isLoading, isLoaded } = slice.actions;
export default slice.reducer;
