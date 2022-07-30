import React, { useState } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Form } from 'basedesign-iswad';

import TextBox from 'BaseComponents/TextBox';
import Select from 'BaseComponents/Select';
import DatePicker from 'BaseComponents/DatePicker';
import ImagePicker from 'BaseComponents/ImagePicker';
import Button from 'BaseComponents/Button';

import {
  passwordValidators,
  provniceValidators,
  birthDateValidators,
  profilePhotoValidators
} from './validators';

import { PROVINCE_CHOICES } from './constants';

import styles from './TestForm.module.scss';

const TestForm = () => {
  const [password, setPassword] = useState('');
  const [province, setProvince] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [profilePhoto, setProfilePhoto] = useState('');

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [provinceErrorMessage, setProvinceErrorMessage] = useState('');
  const [birthDateErrorMessage, setBirthDateErrorMessage] = useState('');
  const [profilePhotoErrorMessage, setProfilePhotoErrorMessage] = useState('');

  const toBeValidatedFields = [
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage
    }
  ];

  const customValidations = () => {
    let validated = true;
    if (!province) {
      setProvinceErrorMessage('Province is required');
      validated = false;
    }

    if (dayjs().diff(birthDate, 'year') < 18) {
      setBirthDateErrorMessage('You must be more than 18 years old!');
      validated = false;
    }

    if (!profilePhoto) {
      setProfilePhotoErrorMessage('You must pick a profile photo');
      validated = false;
    }
    return validated;
  };

  const submitHandler = (e) => {
    if (customValidations()) {
      console.log('Hello');
    }
  };

  return (
    <>
      <Form
        className="w-per-50 ml-auto mr-auto br-all-solid-1 p2 br-rad-px-10"
        onSubmit={submitHandler}
        toBeValidatedFields={toBeValidatedFields}
        id="testForm">
        <TextBox
          isRequired
          type="password"
          labelText="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={passwordErrorMessage}
          name="password"
        />
        <Select
          options={PROVINCE_CHOICES}
          val={province}
          setVal={setProvince}
          selectIntialShownText={''}
          placeHolder="Select a Province"
          labelText="Province"
          isRequired
          errorMessage={provinceErrorMessage}
          errorHandler={setProvinceErrorMessage}
        />
        <DatePicker
          labelText="Birth Date"
          isRequired
          chosenDate={birthDate}
          setChosenDate={setBirthDate}
          errorMessage={birthDateErrorMessage}
          errorHandler={setBirthDateErrorMessage}
        />
        <ImagePicker
          labelText="Profile Photo"
          isRequired
          file={profilePhoto}
          setFile={setProfilePhoto}
          errorMessage={profilePhotoErrorMessage}
          errorHandler={setProfilePhotoErrorMessage}
        />
        <Button type="submit" id="testFormSubmit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TestForm;
