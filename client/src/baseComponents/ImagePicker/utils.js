import { CANVAS_ID, IMAGE_CROPPER_ID } from './constants';

export const cropImage = (imagePath, newX, newY, newWidth, newHeight) => {
  try {
    //create an image object from the path
    const originalImage = new Image();
    originalImage.src = imagePath;

    //initialize the canvas object
    const canvas = document.getElementById(CANVAS_ID);
    const ctx = canvas.getContext('2d');

    //
    const imageCropper = document.getElementById(IMAGE_CROPPER_ID);

    const widthScale = originalImage.width / imageCropper.width;
    const heightScale = originalImage.height / imageCropper.height;

    //wait for the image to finish loading
    originalImage.addEventListener('load', function () {
      //set the canvas size to the new width and height
      canvas.width = newWidth * widthScale;
      canvas.height = newHeight * heightScale;

      //draw the image
      ctx.drawImage(
        originalImage,
        newX * widthScale,
        newY * heightScale,
        newWidth * widthScale,
        newHeight * heightScale,
        0,
        0,
        newWidth * widthScale,
        newHeight * heightScale
      );
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const getCroppedImg = (setSrc, fileName) => {
  const canvas = document.getElementById(CANVAS_ID);
  const fileExtension = fileName.split('.').pop();
  const dataURL = canvas.toDataURL(`image/png`);
  const newFile = dataURLtoFile(dataURL, fileName);
  setSrc(URL.createObjectURL(newFile));
  return newFile;
};

const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};
