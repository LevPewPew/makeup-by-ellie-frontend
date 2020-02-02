import React from 'react';
import ReactLoading from 'react-loading';
import colors from '../../styles/_colors.scss';
import './LoadingAnimation.css';

function LoadingAnimation() {
  return (
    <div className="LoadingAnimation">
      <ReactLoading
        type={"spinningBubbles"}
        color={colors.churchCrab}
        height={"220px"}
        width={"220px"}
      />
    </div>
  );
}

export default LoadingAnimation;
