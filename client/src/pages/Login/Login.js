import React, { useState, useEffect } from "react";
import cx from "classnames";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { Form, Label, Input } from "basedesign-iswad";

import useApiCalls from "Hooks/useApiCalls";
import { login } from "Services/auth";
import { emailValidators, passwordValidators } from "./utils";
import { setLocalStorage } from "Utils/auth";
import { authenticated } from "Services/auth";
import { LOGIN_API_ROUTE } from "Constants/apiRoutes";

import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("mmmohajer70@gmail.com");
  const [password, setPassword] = useState("Mb3742870!?!");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordErrorIsActive, setPasswordErrorIsActive] = useState(false);

  const toBeValidatedFields = [
    {
      input_name: "email",
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage,
      errorActivateHandler: setEmailErrorIsActive,
    },
    {
      input_name: "password",
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage,
      errorActivateHandler: setPasswordErrorIsActive,
    },
  ];

  const [sendLoginReq, setSendLoginReq] = useState(false);
  const bodyData = {
    email,
    password,
  };
  const { data, error } = useApiCalls(
    sendLoginReq,
    "POST",
    LOGIN_API_ROUTE,
    bodyData,
    ""
  );

  useEffect(() => {
    if (data) {
      setLocalStorage("access_token", data["access"]);
      setLocalStorage("refresh_token", data["refresh"]);
      authenticated(dispatch);
      let decoded = jwt_decode(data["access"]);
    }
  }, [data]);
  return (
    <>
      <Form
        className="textWhite py1"
        toBeValidatedFields={toBeValidatedFields}
        onSubmit={() => setSendLoginReq(true)}
      >
        <Input
          type="text"
          name="email"
          placeholder="Type your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailErrorIsActive(false);
            setEmailErrorMessage("");
          }}
          errorMessage={emailErrorMessage}
          errorIsActive={emailErrorIsActive}
        />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordErrorIsActive(false);
            setPasswordErrorMessage("");
          }}
          errorMessage={passwordErrorMessage}
          errorIsActive={passwordErrorIsActive}
        />
        <Input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default Login;
