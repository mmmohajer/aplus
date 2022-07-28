import React from 'react';
import cx from 'classnames';
import { Div, Image } from 'basedesign-iswad';

import Close from 'BaseComponents/Close';

import styles from '../ImagePicker.module.scss';

const ImagePreview = ({ src, setFile, setSrc }) => {
  return (
    <>
      {src && (
        <Div className={cx('ml1 pos-rel mouse-hand', styles.imagePreviewContainer)}>
          <Image src={src} />
          <Div>
            <Close
              className=""
              onClick={() => {
                setFile('');
                setSrc('');
              }}
            />
          </Div>
        </Div>
      )}
    </>
  );
};

export default ImagePreview;
