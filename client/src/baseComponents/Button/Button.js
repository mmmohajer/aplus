import React from 'react';
import cx from 'classnames';
import { Div, Button as BaseButton } from 'basedesign-iswad';

import styles from './Button.module.scss';

const Button = ({ colorType = 'primary', children, ...props }) => {
  return (
    <>
      <BaseButton
        className={cx('p1', styles.btn, colorType === 'primary' && styles.primary)}
        {...props}>
        {children}
      </BaseButton>
    </>
  );
};

export default Button;
