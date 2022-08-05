import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import ReactCrop from 'react-image-crop';
import { Div, Image as BaseImage } from 'basedesign-iswad';

import Button from '@/baseComponents/Button';

import 'react-image-crop/dist/ReactCrop.css';

import { cropImage, getCroppedImg } from '../utils';
import { CANVAS_ID, IMAGE_CROPPER_ID, CROPPER_ID } from '../constants';

import styles from '../ImagePicker.module.scss';

const Cropper = ({ src, setSrc, setFile, fileName, setShowCropper, cropInfo }) => {
  const aspect = cropInfo?.aspect || 1;
  const minWidth = cropInfo?.minWidth || 0;
  const minHeight = cropInfo?.minHeight || 0;
  const maxWidth = cropInfo?.maxWidth || 500;
  const maxHeight = cropInfo?.maxHeight || 500;
  const useScaledSize = cropInfo?.useScaledSize;

  const [crop, setCrop] = useState();
  const [widthScale, setWidthScale] = useState(1);
  const [heightScale, setHeightScale] = useState(1);

  const doCrop = () => {
    return new Promise(function (resolve, reject) {
      const cropped = cropImage(src, crop.x, crop.y, crop.width, crop.height);
      setTimeout(() => {
        if (cropped) {
          resolve('Stuff worked!');
        } else {
          reject(Error('It broke'));
        }
      }, 1000);
    });
  };

  const cropHandler = (e) => {
    e.preventDefault();
    doCrop().then(() => {
      setFile(getCroppedImg(setSrc, fileName));
      setShowCropper(false);
    });
  };

  const getScaledVal = () => {
    const cropper = document.getElementById(CROPPER_ID);
    const originalImage = new Image();
    originalImage.src = src;
    setTimeout(() => {
      setWidthScale(cropper.offsetWidth / originalImage.width);
      setHeightScale(cropper.offsetHeight / originalImage.height);
    }, 1000);
  };

  useEffect(() => {
    if (useScaledSize) {
      console.log('Hello');
      getScaledVal();
    }
  }, [src, useScaledSize]);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx('pos-fix pos-fix--center p2 bgWhite', styles.cropperContainer)}
        id={CROPPER_ID}>
        <ReactCrop
          aspect={aspect}
          minWidth={minWidth * widthScale}
          minHeight={minHeight * heightScale}
          maxWidth={maxWidth * widthScale}
          maxHeight={maxHeight * heightScale}
          crop={crop}
          onChange={(c) => setCrop(c)}
          className={styles.reactCropper}>
          <Div type="flex" hAlign="center" vAlign="center" className={cx(styles.cropper)}>
            <BaseImage src={src} id={IMAGE_CROPPER_ID} />
          </Div>
        </ReactCrop>
        <Div type="flex" hAlign="center" vAlign="center" className="w-per-100 mt2">
          <Button onClick={cropHandler}>Crop Image</Button>
          <Div className={cx(styles.canvasContainer)}>
            <canvas id={CANVAS_ID} className=""></canvas>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Cropper;
