import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import English from './subs/English';
import Farsi from './subs/Farsi';

import styles from './ListItem.module.scss';

const ListItem = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      {language === 'en' && <English />}
      {language === 'fa' && <Farsi />}
    </>
  );
};

export default ListItem;
