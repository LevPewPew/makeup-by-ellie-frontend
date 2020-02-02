import React from 'react';
import { useDispatch } from 'react-redux';

function BtnCancelForm() {
  const dispatch = useDispatch();

  function cancelForm() {
    dispatch({ type: 'DISABLE_CREATE_FORM' });
    dispatch({ type: 'DISABLE_EDITING_FORM' });
  }

  return (
    <button className="BtnCancelForm btn" onClick={cancelForm}>Cancel</button>
  );
}

export default BtnCancelForm;
