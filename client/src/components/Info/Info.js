import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import English from './subs/English';
import Farsi from './subs/Farsi';

import styles from './Info.module.scss';

const Info = ({ type, text }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      {language === 'en' && <English type={type} text={text} />}
      {language === 'fa' && <Farsi type={type} text={text} />}
    </>
  );
};

export default Info;
