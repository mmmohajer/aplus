import React from 'react';
import cx from 'classnames';
import { Div, Image } from 'basedesign-iswad';

import Icon from 'BaseComponents/Icon';

import styles from '../Info.module.scss';

const Farsi = ({ type, text, className }) => {
  return (
    <div className={cx('flex flex--jc--start flex--ai--center', className)}>
      <div className="flex flex--jc--center flex--ai--center">
        <Icon type={type} color="red" />
      </div>
      <div className="box-px-50 ml2 flex flex--jc--center flex--ai--center englishFont text-ltr">
        {text}
      </div>
    </div>
  );
};

export default Farsi;
