import React, { useState, useEffect } from "react";
import cx from "classnames";
import { Form, Label, Input } from "basedesign-iswad";

import useApiCalls from "Hooks/useApiCalls";
import { login } from "Services/auth";

import styles from "./Register.module.scss";

import {
  firstNameValidators,
  lastNameValidators,
  emailValidators,
  passwordValidators,
} from "./utils";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    "POST",
    "/api/auth/users/",
    bodyData,
    ""
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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
    </>
  );
};

export default Register;
