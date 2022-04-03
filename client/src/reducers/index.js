import { combineReducers } from "redux";

import loading from "./general/loading";
import notifications from "./general/notifications";

import auth from "./apiCalls/auth";

const reducer = combineReducers({
  loading,
  notifications,
  auth,
});

export default reducer;
