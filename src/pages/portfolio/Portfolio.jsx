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

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Portfolio() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let res = await Axios.get(`${backendUrl}/portfolio`);
      dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data });
    })();
  }, [dispatch]);

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










//       {
//         portfolioData ?
//         portfolioData.map((service, index) => {
//           const { _id, imageUrl, category } = service;

//           return (
//             <Masonry
//             className={'grid'}
//             elementType={'div'}
//             options={masonryOptions}
//             disableImagesLoaded={false} // default false
//             updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//         >   
//             <Work
//               key={index}
//               id={_id}
//               imageUrl={imageUrl}
//               category={category}
//             />
//             </Masonry>
//           )
//         }) :
//         null
//       }
//     </section>
//   );
// }

export default Portfolio;