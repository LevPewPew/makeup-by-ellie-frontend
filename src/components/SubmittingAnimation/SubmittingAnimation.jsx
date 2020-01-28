import React from 'react';
import ReactLoading from 'react-loading';
import './SubmittingAnimation.css';

function SubmittingAnimation() {

  return (
    <div className="SubmittingAnimation">
      <ReactLoading
        type={'cubes'}
        color={'#d8cbcb'}
        height={'100px'}
        width={'100px'}
      />
    </div>
  )
}

export default SubmittingAnimation;
