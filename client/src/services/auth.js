import {
  authenticated as authenticatedReducer,
  notAuthenticated as notAuthenticatedReducer,
} from "Reducers/apiCalls/isAuthenticated";

export const authenticated = (dispatch) => {
  dispatch(authenticatedReducer());
};

export const notAuthenticated = (dispatch) => {
  dispatch(notAuthenticatedReducer());
};
