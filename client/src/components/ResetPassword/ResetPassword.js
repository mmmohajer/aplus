import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Form, Input } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import { emailValidators, passwordValidators } from './utils';
import useApiCalls from '@/hooks/useApiCalls';
import { SEND_RESET_PASSWORD_EMAIL_API_ROUTE, PASSWORD_SET_API_ROUTE } from '@/constants/apiRoutes';
import { addAlertItem } from '@/utils/notifications';

import styles from './ResetPassword.module.scss';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordErrorIsActive, setPasswordErrorIsActive] = useState(false);

  const toBeValidatedFields = [
    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage,
      errorActivateHandler: setEmailErrorIsActive
    }
  ];

  const toBeValidatedResetFields = [
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage,
      errorActivateHandler: setPasswordErrorIsActive
    }
  ];

  const [sendResetEmailReq, setSendResetEmailReq] = useState(false);
  const bodyData = { email };
  const { data, error } = useApiCalls({
    sendReq: sendResetEmailReq,
    setSendReq: setSendResetEmailReq,
    method: 'POST',
    url: SEND_RESET_PASSWORD_EMAIL_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (data) {
      addAlertItem(dispatch, 'Please check your inbox to validate your email address.', 'success');
    }
  }, [data]);

  useEffect(() => {
    if (router?.query?.token) {
      const localToken = router.query.token;
      setToken(localToken);
    }
  }, [router]);

  useEffect(() => {
    if (token) {
      let decoded;
      try {
        decoded = jwt_decode(token);
      } catch (e) {
        decoded = false;
      }
      if (decoded?.exp && Date.now() <= decoded.exp * 1000 && decoded?.user_id) {
        setUserId(decoded.user_id);
      } else {
        addAlertItem(
          dispatch,
          'Sorry, we are unable to reset your password. That might be because your token has been expired.',
          'error'
        );
      }
    }
  }, [token]);

  const [sendPasswordSetReq, setSendPasswordSetReq] = useState(false);
  const passwordSetbodyData = { userId, token, password };
  const { data: passwordData, error: passwordError } = useApiCalls({
    sendReq: sendPasswordSetReq,
    setSendReq: setSendPasswordSetReq,
    method: 'POST',
    url: PASSWORD_SET_API_ROUTE,
    bodyData: passwordSetbodyData
  });

  useEffect(() => {
    if (passwordData) {
      addAlertItem(dispatch, 'Congrats! you have successfully reset your password!', 'success');
    }
  }, [passwordData]);

  return (
    <>
      {!token ? (
        <Form
          className="textWhite py1"
          toBeValidatedFields={toBeValidatedFields}
          onSubmit={() => setSendResetEmailReq(true)}>
          <Input
            type="text"
            name="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailErrorIsActive(false);
              setEmailErrorMessage('');
            }}
            errorMessage={emailErrorMessage}
            errorIsActive={emailErrorIsActive}
          />
          <Input type="submit" value="Submit" />
        </Form>
      ) : (
        <Form
          className="textWhite py1"
          toBeValidatedFields={toBeValidatedResetFields}
          onSubmit={() => setSendPasswordSetReq(true)}>
          <Input
            type="password"
            name="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordErrorIsActive(false);
              setPasswordErrorMessage('');
            }}
            errorMessage={passwordErrorMessage}
            errorIsActive={passwordErrorIsActive}
          />
          <Input type="submit" value="Submit" />
        </Form>
      )}
    </>
  );
};

export default ResetPassword;
