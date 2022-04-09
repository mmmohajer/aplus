import React, { useState, useEffect } from "react";
import cx from "classnames";

import PublicRoute from "Components/PublicRoute";
import LoginComponent from "Components/Login";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <PublicRoute>
      <LoginComponent />
    </PublicRoute>
  );
};

export default Login;
