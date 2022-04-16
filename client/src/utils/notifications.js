import { generateKey } from "Utils/helpers";
import {
  addNotification,
  removeNotification,
  deactivateNotification,
} from "Reducers/general/notifications";

export const removeAlertItem = (dispatch, key) => {
  dispatch(deactivateNotification({ key }));
  setTimeout(() => {
    dispatch(removeNotification({ key }));
  }, 500);
};

export const addAlertItem = (dispatch, message, type) => {
  const key = generateKey();
  dispatch(addNotification({ key, message, type }));
  setTimeout(() => {
    removeAlertItem(dispatch, key);
  }, 10000);
};

const cleaningError = (err) => {
  err = err.replaceAll("[", "");
  err = err.replaceAll("]", "");
  err = err.replaceAll("'", "");
  return err;
};

export const showErrorAPIAlert = (error, dispatch) => {
  if (error && error?.data) {
    Object.keys(error.data).forEach((key) => {
      if (error.data[key]) {
        error.data[key].forEach((err) => {
          addAlertItem(dispatch, err, "error");
        });
      }
    });
  }
};
