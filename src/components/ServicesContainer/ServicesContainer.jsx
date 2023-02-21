import React from 'react';
import { useSelector } from 'react-redux';
import Service from '../Service/Service';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './ServicesContainer.scss';

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);

  return (
    <section className="ServicesContainer">
      {servicesData.length > 0 ? (
        servicesData.map((service, index) => {
          const { _id, title, description, imageUrl, cost, duration, disclaimer } = service;

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
                customButtonText={title === 'Bridal Makeup' ? 'ENQUIRE' : undefined}
                customButtonLink={
                  title !== 'Bridal Makeup' ? 'https://makeupbyellie.as.me/schedule.php' : undefined
                }
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
