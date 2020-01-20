import React from 'react';
import { useSelector } from 'react-redux';
import BtnEditDoc from './BtnEditDoc';
import BtnDeleteDoc from './BtnDeleteDoc';

function Work(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { id, imageUrl } = props;
  const collection = 'portfolio';

  return (
    <article className="Work">
      <img src={imageUrl} alt=""/>
      {
        onAdminDash ?
        <div className="crud-per-doc">
          <BtnDeleteDoc
            collection={collection}
            id={id}
          />
        </div> :
        null
      }
    </article>
  )
}

export default Work;