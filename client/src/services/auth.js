import { login as loginReducer } from "Reducers/apiCalls/auth";

export const login = (dispatch, data) => {
  dispatch(loginReducer(data));
};
