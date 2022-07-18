import React from 'react';
import cx from 'classnames';
import { Div, Text, Row, Column, Image, Heading, Paragraph } from 'basedesign-iswad';

import Info from 'Components/Info';

import styles from '../Introduction.module.scss';

import ProfilePhote from 'Images/js-Images/general/Profile2.jpg';
import Email from 'Images/js-Images/general/icons8-send-email-48.png';
import Instagram from 'Images/js-Images/general/icons8-instagram-logo-48.png';
import Address from 'Images/js-Images/general/icons8-address-48.png';
import Phone from 'Images/js-Images/general/icons8-phone-64.png';

const English = () => {
  return (
    <>
      <div className="row">
        <div className="row--12 row--sm--12 row--md--6 row--lg--6 p2 flex--jc--around">
          <div className="flex flex--jc--center flex--ai--center introduction_left">
            <h2 className="text-center mt2">Behzad A. Rezai</h2>
            <div>
              <Image src={ProfilePhote} className="profilePhoto" />
            </div>
          </div>
        </div>
        <div className="flex--jc--around row--12 row--sm--12 row--md--6 row--lg--6 pl2 pr2 flex flex--jc--center flex--dir--col introduction_right">
          <h1 className="f-b secondFont">
            <span className="textRed">Canadian</span> Immigration Law Office
          </h1>
          <div>
            <p className="mt2 mb1 f-b">Memberships</p>
            <ul className="mb2">
              <li className="pos-rel pl2 mb1 introduction_right_item">
                Law Society of Ontario (LSO)
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item">
                Canadian Immigration Council (ICCRC)
              </li>
              <li className="pos-rel pl2 mb1 introduction_right_item">
                Federal Translation (Certificated Translation)
              </li>
            </ul>
          </div>
          <div className="text-center flex flex--dir--col flex--jc--center flex--ai--start">
            <Info type="mail" text="barezai@yahoo.com" />
            <Info type="instagram" text="barezai@yahoo.com" />
            <Info type="location" text="100 Frontier Path Pvt., Ottawa, ON, Canada" />
            <Info type="phone" text="+1(613)291-6167" />
          </div>
        </div>
      </div>
    </>
  );
};

export default English;
