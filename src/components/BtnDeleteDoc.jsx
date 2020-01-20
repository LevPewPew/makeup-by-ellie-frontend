import React from 'react';
import Axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnDeleteDoc(props) {
  const { collection, id } = props;

  // TODO will this force a rerender of whatever container has the document component in??? we will see...
  async function handleDelete() {
    try {
      await Axios.delete(`${backendUrl}/${collection}/${id}`);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <button className="BtnDeleteDoc" type="submit" onClick={handleDelete}>Delete</button>
  )
}

export default BtnDeleteDoc;