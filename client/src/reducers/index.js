import { combineReducers } from "redux";

import loading from "./general/loading";
import notifications from "./general/notifications";

import isAuthenticated from "./apiCalls/isAuthenticated";
import profile from "./apiCalls/profile";

const reducer = combineReducers({
  loading,
  notifications,
  isAuthenticated,
  profile,
});

export default reducer;
