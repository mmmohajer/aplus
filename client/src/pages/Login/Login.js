import React, { useState, useEffect } from "react";
import cx from "classnames";

import PublicRoute from "Components/PublicRoute";
import LoginComponent from "Components/Login";
import GoogleAuth from "Components/GoogleAuth";
import MicrosoftAuth from "Components/MicrosoftAuth";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <PublicRoute>
      <LoginComponent />
      {/* <GoogleAuth /> */}
      <MicrosoftAuth />
    </PublicRoute>
  );
};

export default Login;
