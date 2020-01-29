import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnEditDoc(props) {
  const { collection, id, category, editing, setEditing } = props;
  const dispatch = useDispatch();

  function handleUpdate() {
    setEditing(editing ? false : true);
  }

  return (
    <button className="BtnEditDoc" type="submit" onClick={handleUpdate}>Edit</button>
  )
}

export default BtnEditDoc;