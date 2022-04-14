import React from 'react';
import { useSelector } from 'react-redux';
import Service from '../Service/Service';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './ServicesContainer.scss';

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);
  // hacky work around to sort based on direct mongo atlas db manipulated sortId field
  const sortedServicesData = servicesData ? servicesData.sort(() => {}) : null;

  console.log({ servicesData });

  return (
    <section className="ServicesContainer">
      {servicesData.length > 0 ? (
        servicesData.map((service, index) => {
          const { _id, title, description, imageUrl, cost, duration, disclaimer, sortId } = service;

          return (
            <>
              {index === 0 ? null : <div className="break"></div>}
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
            </>
          );
        })
      ) : (
        <LoadingAnimation />
      )}
    </section>
  );
}

export default ServicesContainer;
