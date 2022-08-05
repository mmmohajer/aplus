import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlag,
  faEye,
  faImage,
  faClose,
  faCertificate,
  faQuoteLeft,
  faAngleRight,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons';

import Dashboard from '@/images/js-Images/icons/svg/dashboard.svg';
import Instagram from '@/images/js-Images/icons/svg/instagram.svg';
import Location from '@/images/js-Images/icons/svg/location.svg';
import Phone from '@/images/js-Images/icons/svg/phone.svg';
import Mail from '@/images/js-Images/icons/svg/mail.svg';

function Icon({ type, color, width, scale }) {
  let iconTypes = {
    flag: <FontAwesomeIcon icon={faFlag} style={{ color, width }} />,
    certificate: <FontAwesomeIcon icon={faCertificate} style={{ color, width }} />,
    quoteLeft: <FontAwesomeIcon icon={faQuoteLeft} style={{ color, width }} />,
    angleRight: <FontAwesomeIcon icon={faAngleRight} style={{ color, width }} />,
    angleLeft: <FontAwesomeIcon icon={faAngleLeft} style={{ color, width }} />,
    eye: <FontAwesomeIcon icon={faEye} style={{ color, width, transform: `scale(${scale})` }} />,
    'image-upload': (
      <FontAwesomeIcon icon={faImage} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    close: <FontAwesomeIcon icon={faClose} style={{ color, width, transform: `scale(${scale})` }} />
  };

  iconTypes['dashboard'] = (
    <Dashboard fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['instagram'] = (
    <Instagram fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['location'] = (
    <Location fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['phone'] = (
    <Phone fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  iconTypes['mail'] = <Mail fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />;
  return <>{iconTypes[type]}</>;
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'flag',
    'dashboard',
    'instagram',
    'phone',
    'location',
    'mail',
    'certificate',
    'quoteLeft',
    'angleLeft',
    'angleRight',
    'close'
  ]),
  color: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  type: 'close',
  color: 'black',
  width: '16px'
};

export default Icon;
