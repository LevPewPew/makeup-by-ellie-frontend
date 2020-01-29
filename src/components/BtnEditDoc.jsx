import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnEditDoc() {
  const { collection, id, category } = props;
  const dispatch = useDispatch();
  
  function handleUpdate() {
    try {
      await axios.delete(`${backendUrl}/${collection}/${id}`);
      let res = await axios.get(`${backendUrl}/${collection}`);
      dispatch({ type: `UPDATE_${collection.toUpperCase()}_DATA`, [`new${_.upperFirst(collection)}Data`]: res.data });
      if (category) {
        dispatch({ type: `${category.toUpperCase()}_PORTFOLIO_DATA` });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;