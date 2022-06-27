import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from 'Components/PublicRoute';

import styles from './Unknown404.module.scss';

const Unknown404 = () => {
  return (
    <PublicRoute>
      <Div>Unknown404</Div>
    </PublicRoute>
  );
};

export default Unknown404;
