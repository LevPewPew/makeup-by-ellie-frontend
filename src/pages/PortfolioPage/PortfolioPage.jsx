import React from 'react';
import { useSelector } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer';
import './PortfolioPage.scss';

function PortfolioPage() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);

  return (
    <div className="PortfolioPage">
      <h1>PORTFOLIO</h1>
      {
        portfolioData ?
        <PortfolioContainer /> :
        null
      }
    </div>
  );
}

export default PortfolioPage;
