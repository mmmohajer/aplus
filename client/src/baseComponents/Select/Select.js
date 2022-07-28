import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Select as BaseSelect, Label } from 'basedesign-iswad';

import styles from './Select.module.scss';

const Select = ({
  val,
  setVal,
  selectIntialShownText,
  options,
  openOptionsDownWard,
  placeHolder,
  isRequired,
  labelText,
  errorMessage,
  className
}) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  return (
    <>
      <Div className={cx('mainInputContainer pos-rel', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label className={cx(isRequired && 'required', 'labelForInput')}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')}>
          <BaseSelect
            selectValue={val}
            setSelectValue={setVal}
            options={options}
            className={cx(styles.select)}
            defaultViewClassName={cx('w-per-100 pt1 pb1 pl2 pr2', styles.defaultSelect)}
            optionClassName={cx(styles.option)}
            optinsContainerClassName={cx(styles.optionsContainer)}
            searchContainerClassName="w-per-100"
            inputSearchClassName={cx(styles.searchInput)}
            placeHolderClassName={cx('fs-px-12', styles.placeHolder)}
            fullWidth
            arrowIconFillColor="gray"
            arrowIconStrokeColor="gray"
            arrowIconScale={0.8}
            searchIconFillColor="gray"
            searchIconStrokeColor="gray"
            openOptionsDownWard={openOptionsDownWard}
            isOptionsActive={isOptionsActive}
            setIsOptionsActive={setIsOptionsActive}
            selectIntialShownText={selectIntialShownText}
            placeHolder={placeHolder || 'Choose an option...'}
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

export default Select;
