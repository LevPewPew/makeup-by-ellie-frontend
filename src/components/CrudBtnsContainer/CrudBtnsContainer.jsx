import React from 'react';
import BtnEditDoc from '../BtnEditDoc/BtnEditDoc';
import BtnDeleteDoc from '../BtnDeleteDoc/BtnDeleteDoc';

function CrudBtnsContainer(props) {
  const { collection, id } = props;

  const token = localStorage.getItem('token');

  return (
    <div className="CrudBtnsContainer">
      {
        token ?
        <>
          <BtnEditDoc
            collection={collection}
            id={id}
          />
          <BtnDeleteDoc
            collection={collection}
            id={id}
          />
        </> :
        null
      }
    </div>
  )
}

export default CrudBtnsContainer;
