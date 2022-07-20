import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <>
      <Div type="flex" direction="column" hAlign="start" className="text-center pl5 my3">
        <Div className={cx('h1 mb3 br-bottom-solid-1 br-color-black')}>Let's get in touch</Div>
        <Form>
          <Input placeholder="Your Name" name="name" type="text" className="height-px-20"></Input>
          <Input
            placeholder="Your Email Address"
            name="email"
            type="email"
            className="height-px-20"></Input>
          <Input placeholder="Your Message"></Input>
          <AppButton type="submit">submit</AppButton>
        </Form>
      </Div>
    </>
  );
};

export default Contact;
