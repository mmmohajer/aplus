import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import { FACEBOOK_AUTH_URL } from '@/constants/vars';
import {
  FACEBOOK_AUTH_TOKEN_API_ROUTE,
  FACEBOOK_AUTH_HANDLE_TOKEN_API_ROUTE
} from '@/constants/apiRoutes';
import SocialAuth from '@/components/SocialAuth';

import styles from './FacebookAuth.module.scss';

const FacebookAuth = () => {
  return (
    <>
      <Div>
        <SocialAuth
          socialAuthTokenApiRoute={FACEBOOK_AUTH_TOKEN_API_ROUTE}
          socialAuthHandleTokenApiRoute={FACEBOOK_AUTH_HANDLE_TOKEN_API_ROUTE}
          socialAuthUrl={FACEBOOK_AUTH_URL}>
          Continue With Facebook
        </SocialAuth>
      </Div>
    </>
  );
};

export default FacebookAuth;
