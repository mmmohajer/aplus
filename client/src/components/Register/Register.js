import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { Form, Label, Input, Div, Button } from "basedesign-iswad";

import useApiCalls from "Hooks/useApiCalls";
import {
  REGISTER_API_ROUTE,
  RESEND_ACTIVATE_EMAIL_API_ROUTE,
} from "Constants/apiRoutes";
import { addAlertItem, showErrorAPIAlert } from "Utils/notifications";

import styles from "./Register.module.scss";

import {
  firstNameValidators,
  lastNameValidators,
  emailValidators,
  passwordValidators,
} from "./utils";

const Register = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [fistNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [fistNameErrorIsActive, setFirstNameErrorIsActive] = useState(false);

  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [lastNameErrorIsActive, setLastNameErrorIsActive] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordErrorIsActive, setPasswordErrorIsActive] = useState(false);

  const toBeValidatedFields = [
    {
      input_name: "first_name",
      validators: firstNameValidators,
      errorMessageHandler: setFirstNameErrorMessage,
      errorActivateHandler: setFirstNameErrorIsActive,
    },
    {
      input_name: "last_name",
      validators: lastNameValidators,
      errorMessageHandler: setLastNameErrorMessage,
      errorActivateHandler: setLastNameErrorIsActive,
    },
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

  const [sendRegisterReq, setSendRegisterReq] = useState(false);
  const bodyData = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };
  const { data, error } = useApiCalls(
    sendRegisterReq,
    setSendRegisterReq,
    "POST",
    REGISTER_API_ROUTE,
    bodyData,
    ""
  );

  useEffect(() => {
    if (data) {
      setSubmitted(true);
      addAlertItem(
        dispatch,
        "Please check your inbox to validate your email address.",
        "success"
      );
    }
  }, [data]);

  useEffect(() => {
    showErrorAPIAlert(error, dispatch);
  }, [error]);

  const [sendResendEmailReq, setSendResendEmailReq] = useState(false);
  const bodyResendData = {
    email,
  };
  const { data: resendData, error: resendError } = useApiCalls(
    sendResendEmailReq,
    setSendResendEmailReq,
    "POST",
    RESEND_ACTIVATE_EMAIL_API_ROUTE,
    bodyResendData,
    ""
  );

  useEffect(() => {
    if (resendData) {
      addAlertItem(
        dispatch,
        "Please check your inbox to validate your email address.",
        "success"
      );
    }
  }, [resendData]);

  useEffect(() => {
    showErrorAPIAlert(resendError, dispatch);
  }, [resendError]);

  return (
    <>
      <Form
        className="textWhite py1"
        toBeValidatedFields={toBeValidatedFields}
        onSubmit={() => setSendRegisterReq(true)}
      >
        <Label className="textBlack" htmlFor="sample">
          First Name
        </Label>
        <Input
          type="text"
          name="first_name"
          placeholder="Type your first name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setFirstNameErrorIsActive(false);
            setFirstNameErrorMessage("");
          }}
          errorMessage={fistNameErrorMessage}
          errorIsActive={fistNameErrorIsActive}
        />
        <Input
          type="text"
          name="last_name"
          placeholder="Type your last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setLastNameErrorIsActive(false);
            setLastNameErrorMessage("");
          }}
          errorMessage={lastNameErrorMessage}
          errorIsActive={lastNameErrorIsActive}
        />
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
      {submitted && (
        <Div>
          <Button onClick={() => setSendResendEmailReq(true)}>
            Resend Email
          </Button>
        </Div>
      )}
    </>
  );
};

export default Register;
