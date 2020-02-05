import React from 'react';
import SubmittingAnimation from '../SubmittingAnimation/SubmittingAnimation';

function BtnSubmit(props) {
  const { submitting, pristine, text } = props;

  return (
    <div className="BtnSubmit btn-req-animated">
      {
        submitting ?
        <SubmittingAnimation
          type={"cubes"}
        /> :
        <button className="btn" type="submit" disabled={pristine}>{text || 'Submit'}</button>
      }
    </div>
  );
}

export default BtnSubmit;
