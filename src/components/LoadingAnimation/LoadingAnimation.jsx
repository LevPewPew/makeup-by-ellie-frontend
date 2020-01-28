import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingAnimation.css';

function LoadingAnimation() {

  return (
    <div className="LoadingAnimation">
      <ReactLoading
        type={'spinningBubbles'}
        color={'#d8cbcb'}
        height={'220px'}
        width={'220px'}
      />
    </div>
  )
}

export default LoadingAnimation;