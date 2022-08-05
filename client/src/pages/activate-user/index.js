import React from 'react';
import cx from 'classnames';

import PublicRoute from '@/components/PublicRoute';
import ActivateUserComponent from '@/components/ActivateUser';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <ActivateUserComponent />
    </PublicRoute>
  );
};

export function getStaticParams() {
  return ['token'];
}

export default Index;
