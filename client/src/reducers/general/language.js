import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['LangToFarsi'] = (state, action) => 'fa';
reducerObject['langToEnglish'] = (state, action) => 'en';

const slice = createSlice({
  name: 'language',
  initialState: 'en',
  reducers: reducerObject
});

export const { LangToFarsi, langToEnglish } = slice.actions;
export default slice.reducer;
