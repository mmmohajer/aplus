import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import PublicRoute from 'Components/PublicRoute';
import RegisterComponent from 'Components/Register';

import styles from './Register.module.scss';

const Register = () => {
  return (
    <PublicRoute>
      <RegisterComponent />
    </PublicRoute>
  );
};

export default Register;
