import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Work from './Work';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function WorksContainer() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let res = await Axios.get(`${backendUrl}/portfolio`);
      dispatch({type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data})
    })();
  }, []);

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

export default WorksContainer;
