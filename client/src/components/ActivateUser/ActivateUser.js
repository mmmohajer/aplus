import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';

import useApiCalls from 'Hooks/useApiCalls';
import { ACTIVATE_USER_API_ROUTE } from 'Constants/apiRoutes';
import { addAlertItem } from 'Utils/notifications';

import styles from './ActivateUser.module.scss';

const ActivateUser = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [sendActivateReq, setSendActivateReq] = useState(false);
  const bodyData = {
    userId,
    token
  };

  const { data, error } = useApiCalls({
    sendReq: sendActivateReq,
    setSendReq: setSendActivateReq,
    method: 'POST',
    url: ACTIVATE_USER_API_ROUTE,
    bodyData
  });

  useEffect(() => {
    if (searchParams?.get('token')) {
      const localToken = searchParams.get('token');
      setToken(localToken);
    }
  }, [searchParams]);

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
          'Sorry, we are unable to activate your registration. That might be because your token has been expired.',
          'error'
        );
      }
    }
  }, [token]);

  useEffect(() => {
    if (token && userId) {
      setSendActivateReq(true);
    }
  }, [token, userId]);

  useEffect(() => {
    if (data) {
      if (data.is_activated) {
        addAlertItem(
          dispatch,
          'Congrats! you have successfully activated your registration with us! you can now login with your new credentials.',
          'success'
        );
      }
    }
  }, [data]);

  return (
    <>
      <Div>ActivateUser</Div>
    </>
  );
};

export default ActivateUser;
