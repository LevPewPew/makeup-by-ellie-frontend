import React from 'react';
import {useDispatch} from 'react-redux';

function BtnLogout() {

  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({ type:"UPDATE_TOKEN_DATA", newToken: "" })
  }

  return (
    <div>
        <button className="btn" onClick={logOut}>LOGOUT</button>
    </div>
  );
}

export default BtnLogout;
