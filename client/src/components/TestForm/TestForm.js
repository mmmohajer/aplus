import React, { useState } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Input from 'BaseComponents/Input';
import Select from 'BaseComponents/Select';

import { PROVINCE_CHOICES } from './constants';

import styles from './TestForm.module.scss';

const TestForm = () => {
  const [val, setVal] = useState('');

  return (
    <>
      <Input type="password" />
      <Select
        options={PROVINCE_CHOICES}
        val={val}
        setVal={setVal}
        selectIntialShownText={''}
        placeHolder="Choose"
      />
    </>
  );
};

export default TestForm;
