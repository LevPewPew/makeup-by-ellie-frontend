import React from 'react';
import Axios from 'axios';

function BtnEditDoc(props) {
  const { collection, id } = props;

  function handleUpdate() {
    return 'nothing atm';
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;