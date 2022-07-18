import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import Dashboard from 'Images/js-images/icons/svg/dashboard.svg';
import Instagram from 'Images/js-images/icons/svg/instagram.svg';
import Location from 'Images/js-images/icons/svg/location.svg';
import Phone from 'Images/js-images/icons/svg/phone.svg';
import Mail from 'Images/js-images/icons/svg/mail.svg';

function Icon({ type, color, width, scale }) {
  let iconTypes = {
    flag: <FontAwesomeIcon icon={faFlag} style={{ color, width }} />
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
  type: PropTypes.oneOf(['flag', 'dashboard', 'instagram', 'phone', 'location', 'mail']),
  color: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  type: 'dashboard',
  color: 'black',
  width: '16px'
};

export default Icon;
