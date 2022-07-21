import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import English from './subs/English';
import Farsi from './subs/Farsi';

import styles from './Introduction.module.scss';

const Introduction = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx('mb5', styles.introduction)}>
        {language === 'en' && <English />}
        {language === 'fa' && <Farsi />}
      </Div>
    </>
  );
};

export default Introduction;
