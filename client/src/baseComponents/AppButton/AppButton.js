import React from 'react';
import cx from 'classnames';
import { Button, Div } from 'basedesign-iswad';

import styles from './AppButton.module.scss';

const AppButton = ({ children, ...props }) => {
  return (
    <>
      <Button className="bgRed br-rad-px-5 textWhite px3 py1" {...props}>
        {children}
      </Button>
    </>
  );
};

export default AppButton;
