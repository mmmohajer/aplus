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
