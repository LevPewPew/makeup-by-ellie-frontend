import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

function WorksContainer() {
  const worksData = useSelector((state) => state.portfolioReducer.worksData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "UPDATE_WORKS_DATA", newWorksData: worksData});
  }, [worksData]);

  return (
    <section className="WorksContainer">
      {/* // TODO change this to a work component after you crete one */}
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
    </section>
  );
}

export default WorksContainer;
