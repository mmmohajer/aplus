import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, Input as BaseInput, Label } from 'basedesign-iswad';

import Icon from '@/baseComponents/Icon';

import styles from './TextBox.module.scss';

const TextBox = ({ labelText, isRequired, className, type, ...props }) => {
  const language = useSelector((state) => state.language);

  const [curType, setCurType] = useState(type);

  return (
    <>
      <Div className={cx('mainInputContainer', className)}>
        {labelText && (
          <Div className={cx('labelForInputContainer')}>
            <Label
              className={cx(
                isRequired && 'required',
                'labelForInput',
                isRequired && language === 'fa' && 'required-before'
              )}>
              {labelText}
            </Label>
          </Div>
        )}
        <Div className={cx('inputFieldContainer')}>
          <BaseInput
            className={cx('inputField', type === 'password' && styles.inputWithEye)}
            type={curType}
            {...props}
          />
          {type === 'password' && (
            <>
              <Div
                className={cx('mouse-hand', styles.eye)}
                onClick={() => {
                  if (curType === 'password') {
                    setCurType('text');
                  } else {
                    setCurType('password');
                  }
                }}>
                <Icon type="eye" color="black" width={'14'} />
              </Div>
              {curType !== 'password' && <div className={cx(styles.lineThrough)}></div>}
            </>
          )}
        </Div>
      </Div>
    </>
  );
};

export default TextBox;
