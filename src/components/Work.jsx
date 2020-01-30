import React from 'react';
import CrudBtnsContainer from './CrudBtnsContainer/CrudBtnsContainer';
import './Work.scss';

function Work(props) {
  const { id, imageUrl, category } = props;
  const collection = 'portfolio';

  return (
    <article className="Work" data-testid="Work">
      <img src={imageUrl} alt="" style={{width: "300px"}}/>
      <CrudBtnsContainer
        collection={collection}
        id={id}
        category={category}
      />
    </article>
  )
}

export default Work;