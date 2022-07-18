import React from 'react';
import cx from 'classnames';
import { Div, Row, Column, Image, Heading, Paragraph } from 'basedesign-iswad';

import Info from 'Components/Info';

import styles from '../Introduction.module.scss';

import ProfilePhote from 'Images/js-Images/general/Profile2.jpg';
import Email from 'Images/js-Images/general/icons8-send-email-48.png';
import Instagram from 'Images/js-Images/general/icons8-instagram-logo-48.png';
import Address from 'Images/js-Images/general/icons8-address-48.png';
import Phone from 'Images/js-Images/general/icons8-phone-64.png';

const Farsi = () => {
  return (
    <>
      <div className="row introduction_farsi">
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 p2">
          <div className="flex flex--jc--center flex--ai--center introduction_left">
            <h2 className="text-center mt2">بهزاد افخم رضایی</h2>
            <div>
              <Image src={ProfilePhote} className="profilePhoto" />
            </div>
          </div>
        </div>
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 pl2 pr2 flex flex--jc--center flex--dir--col f-right flex--jc--around introduction_right">
          <h1 className="f-b bigText">
            دفتر وکالت مهاجرتی <span className="textRed">کانادا</span>
          </h1>
          <div>
            <p className="mt2 mb1 f-b">عضویت رسمی در</p>
            <ul className="mb2">
              <li className="pos-rel pl2 mb1 introduction_right_item">
                انجمن حقوقدانان آنتاریو - کانادا (LSO)
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item">
                انجمن مشاورین مهاجرتی دولت فدرال - کانادا (ICCRC)
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item">
                ترجمه رسمی توسط دولت فدرال کانادا (Certificated Translation)
              </li>
            </ul>
          </div>
          <div className="text-center flex flex--dir--col flex--jc--center flex--ai--start">
            <Info src={Email} text="barezai@yahoo.com" />
            <Info src={Instagram} text="barezai@yahoo.com" />
            <Info src={Address} text="100 Frontier Path Pvt., Ottawa, ON, Canada" />
            <Info src={Phone} text="+1(613)291-6167" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Farsi;
