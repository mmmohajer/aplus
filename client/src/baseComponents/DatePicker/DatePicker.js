import React from 'react';
import cx from 'classnames';
import { default as BaseDatePicker } from 'react-datepicker';
import { Div, Label } from 'basedesign-iswad';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './DatePicker.module.scss';

const DatePicker = ({
  className,
  isRequired,
  labelText,
  chosenDate,
  setChosenDate,
  dateFormat = 'dd-MM-yyyy',
  yearDropdownItemNumber = 100,
  showYearDropdown = true,
  showMonthDropdown = false,
  errorMessage,
  placeHolder
}) => {
  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')}>
          <BaseDatePicker
            selected={chosenDate}
            onChange={(date) => setChosenDate(date)}
            className={cx('inputField')}
            dateFormat={dateFormat}
            yearDropdownItemNumber={yearDropdownItemNumber}
            scrollableYearDropdown={true}
            showYearDropdown={showYearDropdown}
            showMonthDropdown={showMonthDropdown}
            placeholderText={placeHolder}
          />
        </Div>
        <Div
          className={cx(
            'iswad_input_errorMessage',
            errorMessage && 'iswad_input_errorMessage_active'
          )}>
          {errorMessage}
        </Div>
      </Div>
    </>
  );
};

export default DatePicker;
