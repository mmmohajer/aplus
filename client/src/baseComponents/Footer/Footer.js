import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Row, Column, Input, Form, Button } from 'basedesign-iswad';

import AppButton from 'BaseComponents/AppButton';
import Info from 'Components/Info';

import { INFORMATION } from './constants';
import { MENU_ITEMS } from 'Constants/menuItems';

import styles from './Footer.module.scss';

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Row className={cx('flex flex--jc--center')}>
        <Column
          className={cx('text-center flex flex--dir--col flex--jc--center flex--ai--start my3')}
          xs={12}
          sm={12}
          md={6}
          lg={6}>
          <Div className="w-per-50 ml-auto mr-auto">
            <Div className={cx('h1 mb3 flex flex--jc--start')}>
              {language === 'en' ? 'Contact' : 'اطلاعات تماس'}
            </Div>
            {INFORMATION.map((item, idx) => (
              <Info className="mb1" key={idx} type={item.type} text={item.text} />
            ))}
          </Div>
        </Column>
        <Column
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={cx('flex flex--dir--col flex--jc--start flex--ai--start my3')}>
          <Div className="w-per-50 ml-auto mr-auto">
            <Div className="h1 mb3 flex flex--jc--start">{language === 'en' ? 'Menu' : 'منو'}</Div>
            <Div type="flex" direction="vertical" hAlign="start">
              {MENU_ITEMS.map((item, idx) => {
                if (item.showInFooter) {
                  return (
                    <Div className={cx('mb1 mouse-hand', styles.menuItem)} key={idx}>
                      {language === 'en' ? item.en : item.fa}
                    </Div>
                  );
                }
              })}
            </Div>
          </Div>
        </Column>
      </Row>
      <Row className={cx('flex flex--jc--center mt3 textWhite bgSilver')}>
        Copyright © 2022 APlus | Powered by
        <a href="https://www.iswad.tech" className={cx('flex flex--jc--center ml1 textRed')}>
          ISWAD
        </a>
      </Row>
    </>
  );
};

export default Footer;
