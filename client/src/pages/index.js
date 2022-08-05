import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Seo from '@/baseComponents/Seo';
import PublicRoute from '@/components/PublicRoute';
import Introduction from '@/components/Introduction';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

import styles from './index.module.scss';

function Home() {
  return (
    <PublicRoute>
      <Seo>
        <Introduction />
        <About />
        <Services />

        <Div className="mt8 w-per-100 bgInverse py3" id="Contact">
          <Div className="show-block-in-md-lg w-per-50 ml-auto mr-auto">
            <Contact />
          </Div>
          <Div className="show-block-in-sm-xsm ml-auto mr-auto">
            <Contact />
          </Div>
        </Div>

        <Testimonials />
      </Seo>
    </PublicRoute>
  );
}

export default Home;
