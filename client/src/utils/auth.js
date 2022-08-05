import cookie from 'js-cookie';

import { authenticated } from '@/services/auth';
import { addAlertItem } from '@/utils/notifications';

// set cookie
export const setCookie = (key, value) => {
  cookie?.set(key, value, {
    expires: 1
  });
};

export const removeCookie = (key) => {
  if (cookie?.get(key)) {
    cookie.remove(key, {
      expires: 1
    });
  }
};
// get cookie
export const getCookie = (key) => {
  if (cookie?.get(key)) {
    return cookie.get(key);
  }
};
// localstorage
export const setLocalStorage = (key, value) => {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (localStorage?.getItem(key)) {
    localStorage.removeItem(key);
  }
};

export const getLocalStorage = (key) => {
  if (localStorage?.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return '';
};

// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

export const updateUser = (user, next) => {
  if (process.browser) {
    if (localStorage.getItem('user')) {
      let auth = JSON.parse(localStorage.getItem('user'));
      auth = user;
      localStorage.setItem('user', JSON.stringify(auth));
      next();
    }
  }
};

export const handleResponse = (response) => {
  if (response.status === 401) {
    signout(() => {
      Router.push({
        pathname: '/signin',
        query: {
          message: 'Your session is expired. Please signin'
        }
      });
    });
  }
};

export const loginUser = (access_token, refresh_token, dispatch) => {
  setLocalStorage('access_token', access_token);
  setLocalStorage('refresh_token', refresh_token);
  authenticated(dispatch);
  addAlertItem(dispatch, 'You have successfully logged in.', 'success');
};
