import {
  authenticated as authenticatedReducer,
  notAuthenticated as notAuthenticatedReducer
} from '@/reducers/apiCalls/isAuthenticated';

export const authenticated = (dispatch) => {
  dispatch(authenticatedReducer());
};

export const notAuthenticated = (dispatch) => {
  dispatch(notAuthenticatedReducer());
};
