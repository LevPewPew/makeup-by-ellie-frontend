import React from 'react';
import SubmittingAnimation from '../SubmittingAnimation/SubmittingAnimation';
import './BtnSubmit.scss'

function BtnSubmit(props) {
  const { submitting, pristine, text } = props;

  return (
    <div className="BtnSubmit">
      {
        submitting ?
        <SubmittingAnimation
          type={'cubes'}
        /> :
        <button type="submit" disabled={pristine}>{text || 'Submit'}</button>
      }
    </div>
  )
}

export default BtnSubmit;
