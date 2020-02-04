import React from 'react';
import { useSelector } from 'react-redux';
import Service from '../Service/Service';

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);
  
  return (
    <section className="servicesContainer">
      {
        servicesData ?
        servicesData.map((service, index) => {
          const { _id, title, description, imageUrl, cost, duration, disclaimer } = service;

          return (
            <Service
              key={index}
              id={_id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              cost={cost}
              duration={duration}
              disclaimer={disclaimer}
            />
          )
        }) :
        null
      }
    </section>
  );
}

export default ServicesContainer;
