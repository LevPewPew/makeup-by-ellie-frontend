import React from 'react';
import ReactLoading from 'react-loading';
import colors from '../../styles/_colors.scss';
import './SubmittingAnimation.css';

function SubmittingAnimation() {

  return (
    <div className="SubmittingAnimation">
      <ReactLoading
        type={'cubes'}
        color={colors.churchCrab}
        height={'100px'}
        width={'100px'}
      />
    </div>
  )
}

export default SubmittingAnimation;
