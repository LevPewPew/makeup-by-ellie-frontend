import React from 'react';
import { useDispatch } from 'react-redux';

function BtnCreateDoc(props) {
  const { collection } = props;

  const dispatch = useDispatch();

  function renderCreateForm() {
    dispatch({ type: 'ENABLE_CREATE_FORM', collection });
  }

  return (
    <button className="BtnCreateDoc" onClick={renderCreateForm}>{`New ${collection} Item`}</button>
  )
}

export default BtnCreateDoc;