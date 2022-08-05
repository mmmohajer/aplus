import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './Close.module.scss';

const Close = ({ className, ...props }) => {
  return (
    <>
      <Div className={cx('pos-abs pos-abs--rt', className)} {...props}>
        <Icon type="close" />
      </Div>
    </>
  );
};

export default Close;
