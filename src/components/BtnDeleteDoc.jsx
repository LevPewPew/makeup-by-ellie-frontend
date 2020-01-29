import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnDeleteDoc(props) {
  const { collection, id } = props;
  const dispatch = useDispatch();

  async function handleDelete() {
    try {
      await axios.delete(`${backendUrl}/${collection}/${id}`);
      dispatch({ type: 'SUCCESSFUL_SUBMIT' });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="BtnDeleteDoc" type="submit" onClick={handleDelete} data-testid="BtnDeleteDoc">Delete</button>
  )
}

export default BtnDeleteDoc;