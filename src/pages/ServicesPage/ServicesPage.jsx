import React from 'react';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import './ServicesPage.scss';

function ServicesPage() {
  return (
    <div className="servicesPage" data-testid="ServicesPage">
      <h1>SERVICES</h1>
      {/*  Some sample text below*/}
      <p id="serviceBlurb">Services are provided from Ellie's home studio located in Melbourne. Whether it’s makeup for your birthday, engagement or a lash lift and tint, Ellie wants to help you look your best in a relaxing environment.</p>
      <ServicesContainer/>
    </div>
  );
}

export default ServicesPage;
