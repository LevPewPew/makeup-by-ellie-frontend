import React from 'react';
import BtnEditDoc from '../BtnEditDoc/BtnEditDoc';
import BtnDeleteDoc from '../BtnDeleteDoc/BtnDeleteDoc';
import './CrudBtnsContainer.scss';

function CrudBtnsContainer(props) {
  const { collection, id, category } = props;

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
            category={category}
          />
        </> :
        null
      }
    </div>
  );
}

export default CrudBtnsContainer;
