import React from 'react';
import { useSelector } from 'react-redux';
import Work from './Work';
import { masonryOptions } from "../components/Portfolio/Exports";
import Masonry from 'react-masonry-component';

function PortfolioContainer() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);
  const sortedPortfolioData = useSelector((state) => state.portfolioReducer.sortedPortfolioData);
  console.log(sortedPortfolioData)
  return (
    <section className="PortfolioContainer">
      <Masonry
        className={'grid'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
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
      </Masonry>
    </section>
  );
}

export default PortfolioContainer;
