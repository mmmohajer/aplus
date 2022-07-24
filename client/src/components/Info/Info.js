import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Icon from 'BaseComponents/Icon';
import { COLORS } from 'Constants/vars';

import styles from './Info.module.scss';

const Info = ({ type, text, ...props }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx('flex flex--jc--start flex--ai--start my1')}>
        <Div className={cx('flex flex--jc--center flex--ai--center', styles.iconContainer)}>
          <Icon type={type} color={COLORS.faded} scale={1} />
        </Div>
        <Div className="ml2 flex flex--jc--center flex--ai--center text-ltr englishFont">
          {text}
        </Div>
      </Div>
    </>
  );
};

export default Info;
