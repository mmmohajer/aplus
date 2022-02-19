import { combineReducers } from "redux";

import loading from "./general/loading";
import notifications from "./general/notifications";

import bugs from "./apiCalls/bugs";

const reducer = combineReducers({
  loading,
  notifications,
  bugs,
});

export default reducer;
