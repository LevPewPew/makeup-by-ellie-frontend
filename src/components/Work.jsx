import React from 'react';
import { useSelector } from 'react-redux';
import BtnEditDoc from './BtnEditDoc';
import BtnDeleteDoc from './BtnDeleteDoc';

function Work(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { _id, imageUrl } = props;
  const collection = 'portfolio';

  return (
    <article className="Work">
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

export default Work;