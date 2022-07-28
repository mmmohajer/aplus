import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faImage, faClose } from '@fortawesome/free-solid-svg-icons';

import Dashboard from 'Images/js-images/icons/svg/dashboard.svg';

function Icon({ type, color, width, scale }) {
  let iconTypes = {
    eye: <FontAwesomeIcon icon={faEye} style={{ color, width, transform: `scale(${scale})` }} />,
    'image-upload': (
      <FontAwesomeIcon icon={faImage} style={{ color, width, transform: `scale(${scale})` }} />
    ),
    close: <FontAwesomeIcon icon={faClose} style={{ color, width, transform: `scale(${scale})` }} />
  };

  iconTypes['dashboard'] = (
    <Dashboard fill={color} stroke={color} style={{ transform: `scale(${scale})` }} />
  );
  return <>{iconTypes[type]}</>;
}

Icon.propTypes = {
  type: PropTypes.oneOf(['eye', 'dashboard', 'image-upload', 'close']),
  color: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  type: 'dashboard',
  color: 'black',
  width: '16px'
};

export default Icon;
