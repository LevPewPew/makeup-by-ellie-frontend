import React from 'react';
import BtnDeleteDoc from './BtnDeleteDoc';

function Work(props) {
  const { id, imageUrl, category } = props;
  // Using token stored in localstorage to verify admin user
  const token = localStorage.getItem('token');
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
            category={category}
          />
        </div> :
        null
      }
    </article>
  )
}

export default Work;