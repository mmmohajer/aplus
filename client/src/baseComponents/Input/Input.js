import React, { useState } from 'react';
import cx from 'classnames';
import { Div, Input as BaseInput, Label } from 'basedesign-iswad';

import Icon from 'BaseComponents/Icon';

import styles from './Input.module.scss';

const Input = ({ labelText, isRequired, className, type, ...props }) => {
  const [curType, setCurType] = useState(type);

  return (
    <>
      <Div className={cx(styles.container, className)}>
        {labelText && (
          <Div className={cx(styles.labelContainer)}>
            <Label className={cx(isRequired && 'required', styles.label)}>{labelText}</Label>
          </Div>
        )}
        <Div className={cx(styles.inputContainer)}>
          <BaseInput
            className={cx(styles.input, type === 'password' && styles.inputWithEye)}
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

export default Input;
