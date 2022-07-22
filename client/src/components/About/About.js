import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Column, Div, Row, Image, Text, Paragraph } from 'basedesign-iswad';

import { aboutText } from './constants';

import AboutImage from 'Images/js-Images/general/behzad-modified-2.jpg';
import styles from './About.module.scss';

const About = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <Div className={cx('bgInverse pb4 pt4', styles.about)}>
        <Div type="flex" hAlign="center" className="h1 mb3">
          {language === 'en' ? 'About Us' : 'درباره ما'}
        </Div>
        <Row className={cx(language === 'en' && styles.row)}>
          <Column xs={12} sm={12} md={12} lg={6} className={cx('flex flex--jc--center mb4')}>
            <Image src={AboutImage} className={cx(styles.aboutImage)} />
          </Column>
          <Column xs={12} sm={12} md={12} lg={6}>
            <Div
              className={cx(
                'flex flex--ai--center flex--dir--col text-justify',
                language === 'en' ? styles.textEnContainer : styles.textFaContainer
              )}>
              <>
                <Div className={cx(language === 'fa' && styles.textFarsi)}>
                  {aboutText.map((item, idx) => (
                    <Paragraph key={idx}>{language === 'en' ? item.en : item.fa}</Paragraph>
                  ))}
                </Div>
              </>
            </Div>
          </Column>
        </Row>
      </Div>
    </>
  );
};

export default About;
