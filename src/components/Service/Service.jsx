import React from 'react';
import { useSelector } from 'react-redux';
import ServiceForm from '../ServiceForm/ServiceForm';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
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
    <article data-testid="Service">
      {
        editingForm === id ?
        <ServiceForm
          initialValues={existingData}
          onSubmit={handleSubmit}
        /> :
        <>
        <div className="break"></div>
          <div className="singleServiceContainer">
              <div className="titleContainer">
                <h1>{title}</h1>
              </div>
              <div className="serviceGrid">
                <div className="imageContainer">
                  <img style={{ width: "300px", height: "auto"}} src={imageUrl} alt="" />
                </div>
                <div className="descriptionContainer">
                  <p>{description}</p>
                  <br/>
                  <BtnBookNow/>
                  <CrudBtnsContainer
                    collection={collection}
                    id={id}
                  />
                </div>
              </div>
          </div>
        </>
      }
    </article>
  );
}

export default Service;
