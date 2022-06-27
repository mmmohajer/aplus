import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Header from 'BaseComponents/Header';
import Footer from 'BaseComponents/Footer';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  return (
    <>
      <Div className={cx('flex flex--dir--col min-height-vh-full flex--jc--between')}>
        <Div>
          <Header />
          <Div>{children}</Div>
        </Div>
        <Footer />
      </Div>
    </>
  );
};

export default BaseTemplate;
