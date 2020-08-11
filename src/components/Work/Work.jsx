import React from 'react';
import { useSelector } from 'react-redux';
import WorkForm from '../WorkForm/WorkForm';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import { portfolioSubmitHandler } from '../../utils/forms/submitHandlers';
import './Work.scss';

function Work(props) {
  const { id, category, imageUrl, handleClick } = props;

  const workForm = useSelector((state) => state.form.WorkForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const collection = 'portfolio';
  const existingData = {
    category,
    imageUrl
  };

  function handleSubmit() {
    portfolioSubmitHandler(workForm, editingForm);
  }

  return (
    <article className="Work" data-testid="Work">
      {
        editingForm === id ?
        <WorkForm
          initialValues={existingData}
          onSubmit={handleSubmit}
        /> :
        <>
          <img src={imageUrl} alt="" onClick={handleClick}/>
          <CrudBtnsContainer
            collection={collection}
            id={id}
            category={category}
          />
        </>
      }
    </article>
  );
}

export default Work;
