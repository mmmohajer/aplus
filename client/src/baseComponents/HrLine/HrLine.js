import React from 'react';
import cx from 'classnames';
import { Div, Text } from 'basedesign-iswad';

import styles from './HrLine.module.scss';

const HrLine = () => {
  return (
    <>
      <Div className={cx(styles.astroDivider)}>
        <Div className={cx(styles.astroDividerMask)}></Div>
        <Text>
          <i>&#10038;</i>
        </Text>
      </Div>
    </>
  );
};

export default HrLine;
