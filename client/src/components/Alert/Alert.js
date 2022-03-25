import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  Div,
  Paragraph,
  Alert as IswadAlert,
  AlertItem,
} from "basedesign-iswad";

import styles from "./Alert.module.scss";

import { removeAlertItem } from "Utils/notifications";

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <IswadAlert>
        {notifications.map((notif) => (
          <AlertItem
            key={notif.key}
            isActive={notif.isActive}
            className={cx(
              "m1 p1",
              notif?.type === "success" && "bgSuccess",
              notif?.type === "error" && "bgWarning",
              notif?.type === "danger" && "bgDanger"
            )}
          >
            <Div
              className="w-per-100"
              type="flex"
              direction="horizontal"
              distributedBetween
            >
              <Paragraph>{notif.message}</Paragraph>
              <Div
                className="textRed bgWhite mouse-hand"
                onClick={() => removeAlertItem(dispatch, notif.key)}
              >
                X
              </Div>
            </Div>
          </AlertItem>
        ))}
      </IswadAlert>
    </>
  );
};

export default Alert;
