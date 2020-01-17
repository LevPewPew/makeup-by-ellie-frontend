import React from 'react';
import { useSelector } from 'react-redux';
import BtnEditDoc from './BtnEditDoc';
import BtnDeleteDoc from './BtnDeleteDoc';

function Service(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { _id, title, description, imageUrl } = props;
  const collection = 'services';

  return (
    <article className="Service">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt=""/>
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