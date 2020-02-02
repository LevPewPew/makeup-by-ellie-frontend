import React from 'react';
import { useSelector } from 'react-redux';
import ServiceForm from '../ServiceForm/ServiceForm';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import { servicesSubmitHandler } from '../../utils/forms/submitHandlers';
import './Service.scss';

function Service(props) {
  const { id, title, description, imageUrl } = props;

  const serviceForm = useSelector((state) => state.form.ServiceForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const collection = 'services';
  const existingData = {
    title,
    description,
    imageUrl
  };

  function handleSubmit() {
    servicesSubmitHandler(serviceForm, editingForm);
  }

  return (
    <article className="Service" data-testid="Service">
      {
        editingForm === id ?
        <ServiceForm
          initialValues={existingData}
          onSubmit={handleSubmit}
        /> :
        <>
          <img style={{ width: "300px", height: "300px", borderRadius: "10px", border: "4px solid grey"}} src={imageUrl} alt="" />
          <h1>{title}</h1>
          <p>{description}</p>
          <CrudBtnsContainer
            collection={collection}
            id={id}
          />
        </>
      }
    </article>
  );
}

export default Service;
