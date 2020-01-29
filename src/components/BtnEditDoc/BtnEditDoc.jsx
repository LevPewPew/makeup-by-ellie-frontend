import React from 'react';
import _ from 'lodash';

function BtnEditDoc(props) {
  const { editing, setEditing } = props;
  
  function handleUpdate() {
    setEditing(editing ? false : true);
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;
