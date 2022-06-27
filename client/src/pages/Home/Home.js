import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import PublicRoute from 'Components/PublicRoute';

import styles from './Home.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Div>
        <Paragraph className={cx('bgPrimary')}>This is the homepage for your new app!</Paragraph>
        <Paragraph>Test env var {process.env.TEST}</Paragraph>
      </Div>
      <Div className="footer">Footer</Div>
    </PublicRoute>
  );
}

export default Home;
