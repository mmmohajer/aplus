import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import English from './subs/English';
import Farsi from './subs/Farsi';

import styles from './Info.module.scss';

const Info = ({ src, text }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      {language === 'en' && <English src={src} text={text} />}
      {language === 'fa' && <Farsi src={src} text={text} />}
    </>
  );
};

export default Info;
