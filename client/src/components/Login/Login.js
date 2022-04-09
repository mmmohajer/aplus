import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { Form, Label, Input } from "basedesign-iswad";

import useApiCalls from "Hooks/useApiCalls";
import { emailValidators, passwordValidators } from "./utils";
import { setLocalStorage } from "Utils/auth";
import { authenticated } from "Services/auth";
import { LOGIN_API_ROUTE } from "Constants/apiRoutes";
import { addAlertItem, showErrorAPIAlert } from "Utils/notifications";

import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    setSendLoginReq,
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
      addAlertItem(dispatch, "You have successfully logged in.", "success");
    }
  }, [data]);

  useEffect(() => {
    showErrorAPIAlert(error, dispatch);
  }, [error]);

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
