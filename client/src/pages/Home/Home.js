import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import PublicRoute from 'Components/PublicRoute';

import styles from './Home.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Div>
        <Paragraph>This is the homepage for your new app!!!</Paragraph>
      </Div>
    </PublicRoute>
  );
}

export default Home;
