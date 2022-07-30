import React from 'react';
import cx from 'classnames';
import { Button as BaseButton, Div } from 'basedesign-iswad';

import styles from './Button.module.scss';

const Button = ({ children, className, ...props }) => {
  return (
    <>
      <BaseButton
        className={cx('w-per-100 bgFaded br-rad-px-5 textWhite', styles.btn, className)}
        {...props}>
        {children}
      </BaseButton>
    </>
  );
};

export default Button;
