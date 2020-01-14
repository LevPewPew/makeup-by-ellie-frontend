import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

function Portfolio() {
  const worksData = useSelector((state) => state.worksData);
  const dispatch = useDispatch();

  // // DUMMY remove later
  // const dummyData = [
  //   {
  //     "_id": "5e1e27590a9dee300d8c85d8",
  //     "category": "editorial",
  //     "image": "test",
  //     "createdAt": "2020-01-14T20:40:57.092Z",
  //     "updatedAt": "2020-01-14T20:40:57.092Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "5e1e29c33a090432523f104e",
  //     "category": "editorial",
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPSnykjoosi4LXvLBhuPIl3JWNjHi2cfa-wt0O1gODuB1Gw0vo",
  //     "createdAt": "2020-01-14T20:51:15.329Z",
  //     "updatedAt": "2020-01-14T20:51:15.329Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "5e1e316a0eb8a8367d7f7fef",
  //     "category": "wedding",
  //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyi1p65bhsGvTa4CQ837kzNpGYiN5P9hFNFCARliwvL17egpHr",
  //     "createdAt": "2020-01-14T21:23:54.913Z",
  //     "updatedAt": "2020-01-14T21:23:54.913Z",
  //     "__v": 0
  //   }
  // ]
  // // TODO change to axios.get later
  // let worksData = dummyData;

  useEffect(() => {
    console.log(worksData);
    dispatch({type: "UPDATE_WORKS_DATA", newWorksData: worksData});
  });

  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <h2>Some Dynamic Category</h2>
      <div>
        {
          worksData ?
          worksData.map((work, index) => {
            return (
              <div key={index}>{work.category}</div>
            )
          }) :
          <div>empty, no categories</div>
        }
      </div>
    </div>
  );
}

export default Portfolio;
