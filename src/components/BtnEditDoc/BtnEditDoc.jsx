import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BtnEditDoc(props) {
  const { id } = props;

  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);
  const dispatch = useDispatch();

  function handleUpdate() {
    if (editingForm) {
      dispatch({ type: 'NOT_EDITING_FORM' });
    } else {
      dispatch({ type: 'EDITING_FORM', documentId: id });
    }
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate} disabled={editingForm}>Edit</button>
  )
}

export default BtnEditDoc;
