/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react';
import Imagepreview from './common/imagePreview';
function ImagePreview1({ id, data }) {
  return (
    <>
      <Imagepreview
        title='Image Preview 1'
        image="https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg"
        name='image 1'
        id="img-1"
      />
    </>
  );
}

export default memo(ImagePreview1);
