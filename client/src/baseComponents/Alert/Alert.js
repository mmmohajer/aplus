import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Alert as BaseAlert, AlertItem } from 'basedesign-iswad';

import Close from '@/baseComponents/Close';
import styles from './Alert.module.scss';

import { removeAlertItem } from '@/utils/notifications';

const Alert = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <>
      <BaseAlert>
        {notifications.map((notif) => (
          <AlertItem
            key={notif.key}
            isActive={notif.isActive}
            className={cx(
              'm1 p2 textWhite',
              styles.alert,
              notif?.type === 'success' && 'bgSuccess',
              notif?.type === 'error' && 'bgWarning',
              notif?.type === 'danger' && 'bgDanger'
            )}>
            <Div
              className="w-per-100 pos-rel"
              type="flex"
              direction="horizontal"
              distributedBetween>
              <Div className="w-per-90">{notif.message}</Div>
              <Close
                className="textRed mouse-hand"
                onClick={() => removeAlertItem(dispatch, notif.key)}
              />
            </Div>
          </AlertItem>
        ))}
      </BaseAlert>
    </>
  );
};

export default Alert;
