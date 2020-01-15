import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

function Portfolio() {
  const worksData = useSelector((state) => state.portfolioReducer.worksData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "UPDATE_WORKS_DATA", newWorksData: worksData});
  }, [worksData]);

  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <h2>Some Dynamic Category</h2>
      <div>
        {
          worksData ?
          worksData.map((work, index) => {
            return (
              <>
              <div>{work.category}</div>
              <img src={work.image} />
              </>
            )
          }) :
          <div>empty, no categories</div>
        }
      </div>
    </div>
  );
}

export default Portfolio;
