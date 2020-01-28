import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingAnimation.css';

function LoadingAnimation(props) {
  const { type } = props;

  return (
    <div className="LoadingAnimation">
      <ReactLoading
        type={type}
        color={'#d8cbcb'}
        height={'220px'}
        width={'220px'}
      />
    </div>
  )
}

export default LoadingAnimation;