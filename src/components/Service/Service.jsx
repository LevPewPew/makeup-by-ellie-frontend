import React from 'react';
import { useSelector } from 'react-redux';
import BtnEditDoc from '../BtnEditDoc';
import BtnDeleteDoc from '../BtnDeleteDoc';
import './Service.css';

function Service(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { _id, title, description, imageUrl } = props;
  const collection = 'services';

  return (
    <article className="Service">
      <img style={{width:300,height:300,borderRadius:10,border:"4px solid grey"}} src={imageUrl} alt=""/>
      <h1>{title}</h1>
      <p>{description}</p>
      {
        onAdminDash ?
        <div className="crud-per-doc">
          <BtnEditDoc
            collection={collection}
            _id={_id}
          />
          <BtnDeleteDoc
            collection={collection}
            _id={_id}
          />
        </div> :
        null
      }
    </article>
  )
}

export default Service;