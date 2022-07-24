import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Text, Image, Row, Column } from 'basedesign-iswad';

import AppButton from 'BaseComponents/AppButton';
import Icon from 'BaseComponents/Icon';
import styles from './Introduction.module.scss';
import { CERTIFICATES } from './constants';
import { COLORS } from '../../constants/vars';

import IntroductionImage from 'Images/js-Images/general/introduction.png';

const Introduction = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx('py5', styles.introduction)} id="Home">
        <Div className="f-b secondFont px1 h1 text-center mb3">
          {language === 'en' ? (
            'A Plus Canada Immigration Law Office'
          ) : (
            <Div>
              <Div> APlus دفتر حقوقی مهاجرت </Div>
            </Div>
          )}
        </Div>
        <Row className={cx(language === 'fa' && styles.introductionRow)}>
          <Column
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={cx(
              'flex flex--dir--col flex--jc--center flex--ai--start',
              language === 'fa' && 'flex--ai--end'
            )}>
            <Div
              type="flex"
              direction="vertical"
              className={cx(language === 'en' ? 'ml5' : 'mr5 text-rtl')}>
              <Div className={cx('f-b h2 mb1')}>
                {language === 'en' ? 'Membership' : 'عضویت رسمی در'}
              </Div>

              {CERTIFICATES.map((item, idx) => (
                <Div
                  type="flex"
                  direction="vertical"
                  hAlign={language === 'en' ? 'start' : 'end'}
                  key={idx}
                  className={cx('mx3')}>
                  {language === 'en' ? (
                    <Div type="flex" vAlign="start">
                      <Div className={cx('mr2')}>
                        <Icon type="certificate" color={COLORS.faded} />
                      </Div>
                      <Div>{item.en}</Div>
                    </Div>
                  ) : (
                    <Div type="flex" vAlign="end">
                      <Div>{item.fa}</Div>
                      <Div className={cx('ml2')}>
                        <Icon type="certificate" color={COLORS.faded} />
                      </Div>
                    </Div>
                  )}
                </Div>
              ))}

              <Div type="flex" hAlign={language === 'en' ? 'start' : 'end'}>
                <AppButton
                  className={cx('max-w-px-200 mt5 mx3', styles.introductionButton)}
                  onClick={() => {
                    document?.querySelector('#Contact').scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}>
                  {language === 'en' ? 'Get an Appointment' : 'رزرو وقت ملاقات'}
                </AppButton>
              </Div>
            </Div>
          </Column>

          <Column xs={12} sm={12} md={6} lg={6} className={cx()}>
            <Image
              src={IntroductionImage}
              className={cx('show-flex-in-md-lg', styles.introductionImage)}
            />
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default Introduction;
