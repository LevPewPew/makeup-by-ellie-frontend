import React from 'react';
import { useSelector } from 'react-redux';
import Service from './Service/Service';
import './ServicesContainer.css';

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);
  
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
  );
}

export default ServicesContainer;
