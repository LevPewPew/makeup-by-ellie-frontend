import React from 'react';
import ServicesContainer from '../../components/ServicesContainer';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="ServicesPage" data-testid="ServicesPage">
      <h1>Services</h1>
      {/*  Some sample text below*/}
      <h3>Services are provided from Ellie's home studio located in Melbourne. Whether it’s makeup for your birthday, engagement or a lash lift and tint, Ellie wants to help you look your best in a relaxing environment.</h3>
      <ServicesContainer/>
    </div>
  )
}

export default ServicesPage
