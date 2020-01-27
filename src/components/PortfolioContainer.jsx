import React from 'react';
import { useSelector } from 'react-redux';
import Work from './Work';

function PortfolioContainer() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);

  return (
    <section className="PortfolioContainer">
      {
        portfolioData ?
        portfolioData.map((service, index) => {
          const { _id, imageUrl } = service;

          return (
            <Work
              key={index}
              id={_id}
              imageUrl={imageUrl}
            />
          )
        }) :
        null
      }
    </section>
  );
}

export default PortfolioContainer;
