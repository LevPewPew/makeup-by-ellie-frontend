import React from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnDeleteDoc(props) {
  const { collection, id } = props;
  const dispatch = useDispatch();

  async function handleDelete() {
    try {
      await Axios.delete(`${backendUrl}/${collection}/${id}`);
      dispatch({ type: `REFRESH_${collection.toUpperCase()}_DATA`, refresh: { refresh: 'yes' } })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="BtnDeleteDoc" type="submit" onClick={handleDelete}>Delete</button>
  )
}

export default BtnDeleteDoc;