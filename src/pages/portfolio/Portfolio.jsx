import React, { useEffect } from 'react';
import Masonry from 'react-masonry-component';
// import PortfolioContainer from '../../components/PortfolioContainer.jsx'
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Work from '../../components/Work';


import { masonryOptions } from "./Exports";
// import { getImages } from "./Request";
import InfiniteScroll from "react-infinite-scroller";
// import ImageSearchPage from "./ImageSearchPage"

import './Portfolio.css';

const images = {
  transitionDuration: 0
};

function Portfolio() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);

  return portfolioData ? (
    <section className="PortfolioGrid">
      <Masonry
        className={'grid'}
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
      {portfolioData.map((service, index) => {
          const { _id, imageUrl, category } = service
          return (
            <div key={index}>
              <img src={imageUrl} style={{width: "300px"}} />
            </div>
          )
      })}
      </Masonry>
    </section>
  ) : null
}

export default Portfolio;