import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Service from './Service/Service';
import './ServicesContainer.css'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);
  const dispatch = useDispatch();
  
  return (
    <section className="ServicesContainer">
      {
        servicesData ?
        servicesData.map((service, index) => {
          const { _id, title, description, imageUrl } = service;

          return (
            <Service
              key={index}
              id={_id}
              title={title}
              description={description}
              imageUrl={imageUrl}
            />
          )
        }) :
        null
      }
    </section>
  )
}

export default ServicesContainer;