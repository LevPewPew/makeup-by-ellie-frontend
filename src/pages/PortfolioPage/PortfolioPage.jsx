import React from 'react';
import { useSelector } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer';
import './PortfolioPage.css';

function PortfolioPage() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);

  return portfolioData ? (
    <section className="portfolioGrid">
      <h1>PORTFOLIO</h1>
      <br />
      <PortfolioContainer />
    </section>
  ) : null
}

export default PortfolioPage;