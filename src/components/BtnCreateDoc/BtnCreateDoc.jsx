import React from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

function BtnCreateDoc(props) {
  const { collection } = props;

  const dispatch = useDispatch();

  function renderCreateForm() {
    dispatch({ type: 'ENABLE_CREATE_FORM', collection });
  }

  return (
    <button className="BtnCreateDoc btn" onClick={renderCreateForm}>{`New ${_.upperFirst(collection)} Item`}</button>
  );
}

export default BtnCreateDoc;
