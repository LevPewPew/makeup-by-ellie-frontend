import React from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';
import Work from '../Work/Work';
import FilterBtns from '../FilterBtns/FilterBtns';
import './PortfolioContainer.scss';

function PortfolioContainer() {
  const filteredPortfolioData = useSelector((state) => state.portfolioReducer.filteredPortfolioData);

  const masonryOptions = {
    fitWidth: true,
    columnWidth: 300,
    gutter: 5
  };

  return (
    <section className="PortfolioContainer">
      <div className="button-container">
        <FilterBtns />
      </div>
      <Masonry
        className={'grid'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
      {
        filteredPortfolioData ?
        filteredPortfolioData.map((service, index) => {
          const { _id, imageUrl, category } = service;

          return (
            <Work
              key={index}
              id={_id}
              imageUrl={imageUrl}
              category={category}
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
