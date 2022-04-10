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
        if (error.data[key].startsWith("[")) {
          let curErrors = error.data[key].split(", ");
          if (curErrors.length === 1) {
            const err = cleaningError(error.data[key]);
            addAlertItem(dispatch, err, "error");
          } else {
            curErrors.forEach((err) => {
              err = cleaningError(err);
              addAlertItem(dispatch, err, "error");
            });
          }
        } else {
          addAlertItem(dispatch, error.data[key], "error");
        }
      }
    });
  }
};
