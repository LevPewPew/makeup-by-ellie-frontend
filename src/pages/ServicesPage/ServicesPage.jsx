import React from 'react';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import './ServicesPage.scss';

function ServicesPage() {
  return (
    <div className="ServicesPage" data-testid="ServicesPage">
      <h1>SERVICES</h1>
      <ServicesContainer/>
    </div>
  );
}

export default ServicesPage;
