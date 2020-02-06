import React from 'react';
import ReactLoading from 'react-loading';
import colors from '../../styles/_colors.scss';
import './SubmittingAnimation.scss';

function SubmittingAnimation() {

  return (
    <div className="SubmittingAnimation">
      <ReactLoading
        type={"cubes"}
        color={colors.faceBusiness}
        width={"150px"}
        height={"50px"}
      />
    </div>
  );
}

export default SubmittingAnimation;
