import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Form, Input, Label } from 'basedesign-iswad';

import AppButton from 'BaseComponents/AppButton';

import { nameValidators, emailValidators, phoneValidators } from './utils';
import styles from './Contact.module.scss';

const Contact = () => {
  const language = useSelector((state) => state.language);

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
        <Div className={cx('text-center h1 mb3')}>
          {language === 'en' ? 'Get an Appointment' : 'تعیین وقت ملاقات'}
        </Div>
        <Div>
          <Form onSubmit={() => console.log('hello')} toBeValidatedFields={toBeValidatedFields}>
            <Div type="flex" direction="vertical">
              <Label
                className={cx(
                  'label pl1 required',
                  language === 'fa' && 'text-rlt flex flex--jc--end pr1 required-before'
                )}>
                {language === 'en' ? 'Name' : 'نام'}
              </Label>
              <Input
                className={cx(language === 'fa' && 'text-rtl')}
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
              <Label
                className={cx(
                  'label pl1 required',
                  language === 'fa' && 'text-rlt flex flex--jc--end pr1 required-before'
                )}>
                {language === 'en' ? 'Email' : 'ایمیل'}
              </Label>
              <Input
                className={cx(language === 'fa' && 'text-rtl')}
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
              <Label
                className={cx(
                  'label pl1 required',
                  language === 'fa' && 'text-rlt flex flex--jc--end pr1 required-before'
                )}>
                {language === 'en' ? 'Whatsapp Number' : 'شماره تماس واتساپ'}
              </Label>
              <Input
                className={cx(language === 'fa' && 'text-rtl')}
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
              <Label
                className={cx('label pl1', language === 'fa' && 'text-rlt flex flex--jc--end pr1')}>
                {language === 'en' ? 'Your Message' : 'پیام'}
              </Label>
              <textarea
                className={cx('textarea', language === 'fa' && 'text-rtl')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            </Div>

            <Div type="flex" hAlign="center">
              <AppButton className="max-w-px-200 mt2" type="submit">
                {language === 'en' ? 'Submit' : 'ارسال'}
              </AppButton>
            </Div>
          </Form>
        </Div>
      </Div>
    </>
  );
};

export default Contact;
