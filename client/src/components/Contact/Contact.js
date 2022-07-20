import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Form, Input, Label } from 'basedesign-iswad';

import AppButton from 'BaseComponents/AppButton';

import { nameValidators, emailValidators, phoneValidators } from './utils';
import styles from './Contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [nameErrorIsActive, setNameErrorIsActive] = useState(false);

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [phoneErrorIsActive, setPhoneErrorIsActive] = useState(false);

  const [message, setMessage] = useState('');

  const toBeValidatedFields = [
    {
      input_name: 'name',
      validators: nameValidators,
      errorMessageHandler: setNameErrorMessage,
      errorActivateHandler: setNameErrorIsActive
    },

    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage,
      errorActivateHandler: setEmailErrorIsActive
    },

    {
      input_name: 'phone',
      validators: phoneValidators,
      errorMessageHandler: setPhoneErrorMessage,
      errorActivateHandler: setPhoneErrorIsActive
    }
  ];

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="start" className="px5 my3">
        <Div className={cx('text-center h1 mb3')}>Get an Appointment</Div>
        <Div>
          <Form onSubmit={() => console.log('hello')} toBeValidatedFields={toBeValidatedFields}>
            <Div type="flex" direction="vertical">
              <Label className="label pl1 required">Name</Label>
              <Input
                name="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameErrorIsActive(false);
                  setNameErrorMessage('');
                }}
                errorMessage={nameErrorMessage}
                errorIsActive={nameErrorIsActive}></Input>
            </Div>

            <Div type="flex" direction="vertical">
              <Label className="label pl1 required">Email</Label>
              <Input
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErrorIsActive(false);
                  setEmailErrorMessage('');
                }}
                errorMessage={emailErrorMessage}
                errorIsActive={emailErrorIsActive}></Input>
            </Div>

            <Div type="flex" direction="vertical">
              <Label className="label pl1 required">Whatsapp</Label>
              <Input
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhoneErrorIsActive(false);
                  setPhoneErrorMessage('');
                  setPhone(e.target.value);
                }}
                errorMessage={phoneErrorMessage}
                errorIsActive={phoneErrorIsActive}></Input>
            </Div>

            <Div type="flex" direction="vertical">
              <Label className="label pl1">Your message</Label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea"></textarea>
            </Div>

            <Div type="flex" hAlign="center">
              <AppButton className="max-w-px-200 mt2" type="submit">
                submit
              </AppButton>
            </Div>
          </Form>
        </Div>
      </Div>
    </>
  );
};

export default Contact;
