import React from 'react';
import { useSelector } from 'react-redux';
import ServiceForm from '../ServiceForm/ServiceForm';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import { servicesSubmitHandler } from '../../utils/forms/submitHandlers';
import './Service.scss';

function Service(props) {
  const {
    id,
    title,
    description,
    imageUrl,
    cost,
    duration,
    disclaimer,
    customButtonText,
    customButtonLink,
  } = props;

  const serviceForm = useSelector((state) => state.form.ServiceForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const collection = 'services';
  const existingData = {
    title,
    description,
    imageUrl,
    cost,
    duration,
    disclaimer,
  };

  function handleSubmit() {
    servicesSubmitHandler(serviceForm, editingForm);
  }

  return (
    <article className="Service" data-testid="Service">
      {editingForm === id ? (
        <ServiceForm initialValues={existingData} onSubmit={handleSubmit} />
      ) : (
        <>
          <h2>{title}</h2>
          <div className="img-description-btn-container">
            <div className={'img-container'}>
              <img src={imageUrl} alt="woman in makeup" />
            </div>
            <div className="description-container">
              <p>{description}</p>
              {duration ? (
                <p className="duration">
                  <strong>Duration: </strong>
                  {duration}
                </p>
              ) : null}
              {cost ? (
                <p className="cost">
                  <strong>Cost: </strong>
                  {cost}
                </p>
              ) : null}
              <p>{disclaimer}</p>
              <BtnBookNow customText={customButtonText} customLink={customButtonLink} />
              <CrudBtnsContainer collection={collection} id={id} />
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default Service;
