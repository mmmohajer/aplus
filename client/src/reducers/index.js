import { combineReducers } from "redux";

import bugReducer from "./bug";

const reducer = combineReducers({
  bug: bugReducer,
});

export default reducer;
