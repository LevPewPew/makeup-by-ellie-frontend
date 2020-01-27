import React from 'react';

function BtnEditDoc() {

  function handleUpdate() {
    return 'nothing atm';
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;