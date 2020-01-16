import React from 'react';
import { useSelector } from 'react-redux';

function Service(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { title, description, imageUrl } = props;

  return (
    <div className="Service">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl}/>
        {
          onAdminDash ?
          <div className="crud-per-doc">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div> :
          null
        }
    </div>
  )
}

export default Service;