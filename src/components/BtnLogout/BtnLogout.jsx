import React from 'react';
import {useDispatch} from 'react-redux';
import './BtnLogout.scss';

function BtnLogout() {

  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({ type:"UPDATE_TOKEN_DATA", newToken: "" })
  }

  return (
    <button className="BtnLogout btn" onClick={logOut}>Log out</button>
  );
}

export default BtnLogout;
