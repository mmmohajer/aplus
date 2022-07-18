import React from 'react';
import cx from 'classnames';
import { Div, Image } from 'basedesign-iswad';

import styles from '../Info.module.scss';

const English = ({ src, text }) => {
  return (
    <div className="flex flex--jc--start flex--ai--center">
      <div className="box-px-50 w-px-50 flex flex--jc--center flex--ai--center">
        <Image src={src} width="50" height="50" alt="APlus Logo" />
      </div>
      <div className="box-px-50 ml2 flex flex--jc--center flex--ai--center">{text}</div>
    </div>
  );
};

export default English;
