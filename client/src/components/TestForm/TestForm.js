import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Form } from 'basedesign-iswad';

import TextBox from 'BaseComponents/TextBox';
import Select from 'BaseComponents/Select';
import DatePicker from 'BaseComponents/DatePicker';
import ImagePicker from 'BaseComponents/ImagePicker';

import { PROVINCE_CHOICES } from './constants';

import styles from './TestForm.module.scss';

const TestForm = () => {
  const [val, setVal] = useState('');
  const [file, setFile] = useState('');

  return (
    <>
      <Form className="w-per-50 ml-auto mr-auto br-all-solid-1 p2 br-rad-px-10">
        <TextBox isRequired type="password" labelText="Password" />
        <Select
          options={PROVINCE_CHOICES}
          val={val}
          setVal={setVal}
          selectIntialShownText={''}
          placeHolder="Choose"
          labelText="Province"
          isRequired
        />
        <DatePicker labelText="Birth Date" isRequired />
        <ImagePicker labelText="Profile Photo" isRequired file={file} setFile={setFile} />
      </Form>
    </>
  );
};

export default TestForm;
