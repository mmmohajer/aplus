import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Div, TextArea as BaseTextArea, Label } from 'basedesign-iswad';

import styles from './TextArea.module.scss';

const TextArea = ({ labelText, isRequired, className, type, ...props }) => {
  const language = useSelector((state) => state.language);

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
        <Div className={cx('textAreaInputFieldContainer')}>
          <BaseTextArea className={cx('textarea')} {...props} />
        </Div>
      </Div>
    </>
  );
};

export default TextArea;
