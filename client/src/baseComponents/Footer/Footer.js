import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Row, Column, Input, Form, Button } from 'basedesign-iswad';

import Info from '@/components/Info';

import { INFORMATION } from './constants';
import { MENU_ITEMS } from '@/constants/menuItems';

import styles from './Footer.module.scss';

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx(styles.footer)}>
        <Row className={cx('flex flex--jc--center')}>
          <Column
            className={cx('text-center flex flex--dir--col flex--jc--center flex--ai--start my3')}
            xs={12}
            sm={12}
            md={6}
            lg={6}>
            <Div className="w-per-50 ml-auto mr-auto">
              <Div
                type="flex"
                hAlign={language === 'en' ? 'start' : 'end'}
                className={cx('h1 mb3')}>
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
              <Div
                type="flex"
                hAlign={language === 'en' ? 'start' : 'end'}
                className={cx('h1 mb3')}>
                {language === 'en' ? 'Menu' : 'منو'}
              </Div>
              <Div type="flex" direction="vertical" hAlign={language === 'en' ? 'start' : 'end'}>
                {MENU_ITEMS.map((item, idx) => {
                  if (item.showInFooter) {
                    return (
                      <Div
                        className={cx('mb1 mouse-hand', styles.menuItem)}
                        key={idx}
                        onClick={() =>
                          document?.querySelector(`#${item.en}`).scrollIntoView({
                            behavior: 'smooth'
                          })
                        }>
                        {language === 'en' ? item.en : item.fa}
                      </Div>
                    );
                  }
                })}
              </Div>
            </Div>
          </Column>
        </Row>
        <Row className={cx('flex flex--jc--center mt3 textWhite bgSilver englishFont fs-px-14 p1')}>
          Copyright © 2022 APlus | Powered by
          <a href="https://www.iswad.tech" className={cx('flex flex--jc--center ml1 textRed')}>
            ISWAD
          </a>
        </Row>
      </Div>
    </>
  );
};

export default Footer;
