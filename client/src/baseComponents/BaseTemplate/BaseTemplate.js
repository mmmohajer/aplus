import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div } from 'basedesign-iswad';

import Header from 'BaseComponents/Header';
import Footer from 'BaseComponents/Footer';
import HrLine from 'BaseComponents/HrLine';

import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children }) => {
  const language = useSelector((state) => state.language);
  return (
    <>
      <Div
        className={cx(
          'flex flex--dir--col min-height-vh-full flex--jc--between',
          language === 'fa' && 'farsiFont'
        )}>
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
