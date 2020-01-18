import React from 'react';
import Axios from 'axios';

function BtnEditDoc(props) {
  const { collection, id } = props;

  // TODO will this force a rerender of whatever container has the document component in??? we will see...
  function handleUpdate() {
    return 'nothing atm';
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;