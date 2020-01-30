import React from 'react';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import './Service.css';

function Service(props) {
  const { id, title, description, imageUrl } = props;
  const collection = 'services';

  return (
    <article className="Service" data-testid="Service">
      <img style={{width:300,height:300,borderRadius:10,border:"4px solid grey"}} src={imageUrl} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <CrudBtnsContainer
        collection={collection}
        id={id}
      />
    </article>
  )
}

export default Service;