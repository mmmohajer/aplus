import React from 'react';
import cx from 'classnames';
import { Div, Row, Column, Image, Heading, Paragraph } from 'basedesign-iswad';

import Info from 'Components/Info';

import styles from '../Introduction.module.scss';

import ProfilePhote from 'Images/js-Images/general/behzad-modified-2.jpg';
import Email from 'Images/js-Images/general/icons8-send-email-48.png';
import Instagram from 'Images/js-Images/general/icons8-instagram-logo-48.png';
import Address from 'Images/js-Images/general/icons8-address-48.png';
import Phone from 'Images/js-Images/general/icons8-phone-64.png';

const Farsi = () => {
  return (
    <>
      <div className="row introduction_farsi bgInverse">
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 p2">
          <div className="flex flex--jc--center flex--ai--center introduction_left">
            <h2 className="text-center mt2">بهزاد افخم رضایی</h2>
            <div>
              <Image src={ProfilePhote} className="profilePhoto" />
            </div>
          </div>
        </div>
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 pl2 pr2 flex flex--dir--col f-right flex--jc--around text-rtl introduction_right">
          <h1 className="f-b h1 ml-auto mr3 mb3 flex flex--ai--center">
            <div className="mr1">APlus</div>
            <div>دفتر حقوق مهاجرتی</div>
          </h1>
          <div className="text-rtl ml-auto mr3">
            <p className="mt2 mb1 f-b">عضویت رسمی در</p>
            <ul className="mb2 mr3">
              <li className="pos-rel pl2 mb1 introduction_right_item_farsi">
                <div className="flex flex--jc--end flex--ai--center">
                  <div>(LSO)</div>
                  <div>انجمن حقوقدانان آنتاریو - کانادا</div>
                </div>
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item_farsi">
                <div className="flex flex--jc--end flex--ai--center">
                  <div>(ICCRC)</div>
                  <div>انجمن مشاورین مهاجرتی دولت فدرال - کانادا</div>
                </div>
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item_farsi">
                <div className="flex flex--jc--end flex--ai--center">
                  <div>(Certified Translation)</div>
                  <div>ترجمه رسمی توسط دولت فدرال کانادا</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farsi;
