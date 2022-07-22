import React from 'react';
import cx from 'classnames';
import { Div, Paragraph } from 'basedesign-iswad';

import PublicRoute from 'Components/PublicRoute';
import Introduction from 'Components/Introduction';
import Contact from 'Components/Contact';
import Services from 'Components/Services';
import About from 'Components/About';
import Testimonials from 'Components/Testimonials';

import styles from './Home.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Introduction />
      <About />
      <Services />

      <Div className="mt8 w-per-100 bgInverse py3">
        <Div className="show-block-in-md-lg w-per-50 ml-auto mr-auto">
          <Contact />
        </Div>
        <Div className="show-block-in-sm-xsm ml-auto mr-auto">
          <Contact />
        </Div>
      </Div>

      <Testimonials />
    </PublicRoute>
  );
}

export default Home;
