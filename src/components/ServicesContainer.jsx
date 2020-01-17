import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Service from './Service';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ServicesContainer() {
  const servicesData = useSelector((state) => state.servicesReducer.servicesData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let res = await Axios.get(`${backendUrl}/services`);
    
      dispatch({type: 'UPDATE_SERVICES_DATA', newServicesData: res.data})
    })();
  }, []);
  
  return (
    <section className="ServicesContainer">
      {
        servicesData ?
        servicesData.map((service) => {
          const { _id, title, description, imageUrl } = service;

          return (
            <Service
              id={_id}
              title={title}
              description={description}
              imageUrl={imageUrl}
            />
          )
        }) :
        null
      }
    </section>
  )
}

export default ServicesContainer;