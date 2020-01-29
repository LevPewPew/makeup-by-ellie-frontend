import React from 'react';
import BtnEditDoc from '../BtnEditDoc/BtnEditDoc';
import BtnDeleteDoc from '../BtnDeleteDoc/BtnDeleteDoc';

function CrudBtnsContainer(props) {
  const token = localStorage.getItem('token');
  const { collection, id, editing, setEditing } = props;

  return (
    <div className="CrudBtnsContainer">
      {
        token ?
        <>
          <BtnEditDoc
            collection={collection}
            id={id}
            editing={editing}
            setEditing={setEditing}
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
