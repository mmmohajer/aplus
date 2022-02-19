import { combineReducers } from "redux";

import loadingReducer from "./loading";

import bugReducer from "./bug";

const reducer = combineReducers({
  bug: bugReducer,
  loading: loadingReducer,
});

export default reducer;
