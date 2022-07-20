import React from 'react';
import cx from 'classnames';
import { Button, Div } from 'basedesign-iswad';

import styles from './AppButton.module.scss';

const AppButton = ({ children, className, ...props }) => {
  return (
    <>
      <Button
        className={cx('w-per-100 bgFaded br-rad-px-5 textWhite', styles.btn, className)}
        {...props}>
        {children}
      </Button>
    </>
  );
};

export default AppButton;
