import React, { useState, useEffect, Children } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { Div } from 'basedesign-iswad';
import { useRouter } from 'next/router';

import useApiCalls from '@/hooks/useApiCalls';
import { loginUser } from '@/utils/auth';

import styles from './SocialAuth.module.scss';

const SocialAuth = ({
  socialAuthTokenApiRoute,
  socialAuthHandleTokenApiRoute,
  socialAuthUrl,
  children
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [code, setCode] = useState('');
  const [sendSocialAuthReq, setSendSocialAuthReq] = useState(false);
  const [sendGetProfileReq, setSendGetProfileReq] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [tokenId, setTokenId] = useState('');

  useEffect(() => {
    if (router?.query?.code) {
      setCode(router.query.code);
    }
  }, [router]);

  const bodyData = { code };

  const { data, error } = useApiCalls({
    sendReq: sendSocialAuthReq,
    setSendReq: setSendSocialAuthReq,
    method: 'POST',
    url: socialAuthTokenApiRoute,
    bodyData,
    showLoading: true
  });

  useEffect(() => {
    if (code) {
      setSendSocialAuthReq(true);
    }
  }, [code]);

  useEffect(() => {
    if (data) {
      setAccessToken(data['Authorization Data']['access_token']);
      if ('id_token' in data['Authorization Data']) {
        setTokenId(data['Authorization Data']['id_token']);
      } else {
        setTokenId('No token id');
      }
    }
  }, [data]);

  const bodyProfileData = { access_token: accessToken, id_token: tokenId };

  const { data: profileData, error: profileError } = useApiCalls({
    sendReq: sendGetProfileReq,
    setSendReq: setSendGetProfileReq,
    method: 'POST',
    url: socialAuthHandleTokenApiRoute,
    bodyData: bodyProfileData,
    showLoading: true
  });

  useEffect(() => {
    if (accessToken?.length && tokenId?.length) {
      setSendGetProfileReq(true);
    }
  }, [accessToken, tokenId]);

  useEffect(() => {
    if (profileData) {
      loginUser(profileData['access'], profileData['refresh'], dispatch);
    }
  }, [profileData]);

  return (
    <>
      <Div>
        <a href={`${socialAuthUrl}`}>{children}</a>
      </Div>
    </>
  );
};

export default SocialAuth;
