import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import HrLine from 'BaseComponents/HrLine';

import PublicRoute from 'Components/PublicRoute';
import Introduction from 'Components/Introduction';
import ListItem from 'Components/ListItem';

import styles from './Home.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Introduction />
      <HrLine />
      <ListItem />
    </PublicRoute>
  );
}

export default Home;
