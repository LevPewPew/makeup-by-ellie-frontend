import React from 'react';
import BtnDeleteDoc from './BtnDeleteDoc';

function Work(props) {
  const token = localStorage.getItem('token');
  const { id, imageUrl } = props;
  const collection = 'portfolio';

  return (
    <article className="Work" data-testid="Work">
      <img src={imageUrl} alt="" style={{width: "300px"}}/>
      {
        token ?
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