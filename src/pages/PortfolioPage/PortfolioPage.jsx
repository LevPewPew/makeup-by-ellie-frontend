import React from 'react';
import { useSelector } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer';
import './PortfolioPage.css';

function PortfolioPage() {
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);



  // const sortData = (category) => {
  //   portfolioData.filter(img => {
  //     return img.category === category
  //   })
  // }

  return portfolioData ? (
    <section className="portfolioGrid">
      <h1>PORTFOLIO</h1>
      <br />
      <button>Beauty</button>
      {/* onClick={sortBeauty} */}
      <button>Editorial</button>
      <button>Bridal</button>
      <PortfolioContainer />
    </section>
  ) : null
}

export default PortfolioPage;