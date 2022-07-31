import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Div, Form } from 'basedesign-iswad';

import TextBox from 'BaseComponents/TextBox';
import TextArea from 'BaseComponents/TextArea';
import Button from 'BaseComponents/Button';

import useApiCalls from 'Hooks/useApiCalls';
import { CONTACT_FORM_API_ROUTE } from 'Constants/apiRoutes';
import { addAlertItem } from 'Utils/notifications';

import { nameValidators, emailValidators } from './utils';
import styles from './Contact.module.scss';

const Contact = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  const [message, setMessage] = useState('');

  const toBeValidatedFields = [
    {
      input_name: 'name',
      validators: nameValidators,
      errorMessageHandler: setNameErrorMessage
    },

    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage
    }
  ];

  const [sendReq, setSendReq] = useState(false);
  const bodyData = {
    name,
    email,
    phone_number: phone,
    message
  };
  const { data, error } = useApiCalls({
    sendReq,
    setSendReq,
    method: 'POST',
    url: CONTACT_FORM_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      addAlertItem(
        dispatch,
        'You have successfully submitted the form, we will contact you shortly.',
        'success'
      );
    }
  }, [data]);

  return (
    <>
      <Div type="flex" direction="vertical" hAlign="start" className="px5 my3">
        <Div className={cx('text-center h1 mb3')}>
          {language === 'en' ? 'Get an Appointment' : 'تعیین وقت ملاقات'}
        </Div>
        <Div>
          <Form onSubmit={() => setSendReq(true)} toBeValidatedFields={toBeValidatedFields}>
            <TextBox
              isRequired
              className={cx(language === 'fa' && 'text-rtl')}
              labelText={language === 'en' ? 'Name' : 'نام'}
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);

                setNameErrorMessage('');
              }}
              errorMessage={nameErrorMessage}></TextBox>
            <TextBox
              isRequired
              className={cx(language === 'fa' && 'text-rtl')}
              labelText={language === 'en' ? 'Email' : 'ایمیل'}
              name="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                setEmailErrorMessage('');
              }}
              errorMessage={emailErrorMessage}></TextBox>
            <TextBox
              className={cx(language === 'fa' && 'text-rtl')}
              labelText={language === 'en' ? 'WhatsApp Number' : 'شماره واتساپ'}
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhoneErrorMessage('');
                setPhone(e.target.value);
              }}
              errorMessage={phoneErrorMessage}></TextBox>
            <TextArea
              className={cx('', language === 'fa' && 'text-rtl')}
              value={message}
              labelText={language === 'en' ? 'Message' : 'پیام'}
              onChange={(e) => setMessage(e.target.value)}></TextArea>
            <Div type="flex" hAlign="center">
              <Button className="max-w-px-200 mt2" type="submit">
                {language === 'en' ? 'Submit' : 'ارسال'}
              </Button>
            </Div>
          </Form>
        </Div>
      </Div>
    </>
  );
};

export default Contact;
