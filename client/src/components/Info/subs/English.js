import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { COLORS } from 'Constants/vars';

import Icon from 'BaseComponents/Icon';

import styles from '../Info.module.scss';

const English = ({ type, text, className }) => {
  return (
    <div className={cx('flex flex--jc--start flex--ai--start', className)}>
      <div className={cx('flex flex--jc--center flex--ai--center', styles.iconContainer)}>
        <Icon type={type} color={COLORS.faded} scale={1.3} />
      </div>
      <div className="ml2 flex flex--jc--center flex--ai--center text-ltr">{text}</div>
    </div>
  );
};

export default English;
