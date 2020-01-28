import React from 'react';
import Masonry from 'react-masonry-component';
import { useSelector } from 'react-redux';
import { masonryOptions } from "../../components/Portfolio/Exports";

import './PortfolioPage.css';

function PortfolioPage() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);

  return portfolioData ? (
    <section className="portfolioGrid">
      <h1>PORTFOLIO</h1>
      <br />
      <Masonry
        className={'grid'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      > 
      {portfolioData.map((service, index) => {
          const { imageUrl, category } = service
          return (
            <div key={index}>
              <img src={imageUrl} style={{width: "300px"}} alt='work'/>
            </div> 
          )
      })}
      </Masonry>
    </section>
  ) : null
}

export default PortfolioPage;