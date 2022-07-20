import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import HrLine from 'BaseComponents/HrLine';

import PublicRoute from 'Components/PublicRoute';
import Introduction from 'Components/Introduction';
import ListItem from 'Components/ListItem';
import Contact from 'Components/Contact';

import styles from './Home.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Introduction />
      <HrLine />
      <ListItem />
      <Div className="w-per-100 bgInverse py3">
        <Div className="show-block-in-md-lg w-per-50 ml-auto mr-auto">
          <Contact />
        </Div>

        <Div className="show-block-in-sm-xsm ml-auto mr-auto">
          <Contact />
        </Div>
      </Div>
    </PublicRoute>
  );
}

export default Home;
