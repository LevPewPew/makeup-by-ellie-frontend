import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FilterBtns.scss';

function FilterBtns() {
  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const filteredPortfolioData = useSelector((state) => state.portfolioReducer.filteredPortfolioData);
  const dispatch = useDispatch();

  const [ beautyClass, setBeautyClass ] = useState('active btn');
  const [ editorialClass, setEditorialClass ] = useState('inactive btn');
  const [ bridalClass, setBridalClass ] = useState('inactive btn');

  function filterBeauty() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_BEAUTY' });
    setBeautyClass('active btn');
    setEditorialClass('inactive btn');
    setBridalClass('inactive btn');
  }

  function filterEditorial() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_EDITORIAL' });
    setBeautyClass('inactive btn');
    setEditorialClass('active btn');
    setBridalClass('inactive btn');
  }

  function filterBridal() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_BRIDAL' });
    setBeautyClass('inactive btn');
    setEditorialClass('inactive btn');
    setBridalClass('active btn');
  }

  useEffect(() => {
    function checkCurrentFilter() {
      let category = filteredPortfolioData[0] ?
      filteredPortfolioData[0].category :
      null

      return category;
    }

    switch(checkCurrentFilter()) {
      case 'beauty':
        setBeautyClass('active btn');
        setEditorialClass('inactive btn');
        setBridalClass('inactive btn');
        break;
      case 'editorial':
        setBeautyClass('inactive btn');
        setEditorialClass('active btn');
        setBridalClass('inactive btn');
        break;
      case 'bridal':
        setBeautyClass('inactive btn');
        setEditorialClass('inactive btn');
        setBridalClass('active btn');
        break;
      default:
        setBeautyClass('inactive btn');
        setEditorialClass('inactive btn');
        setBridalClass('inactive btn');
    }
  }, [successfulSubmit]);

  return (
    <section className="FilterBtns">
      <button onClick={filterBeauty} className={beautyClass}>BEAUTY</button>
      <button onClick={filterEditorial} className={editorialClass}>EDITORIAL</button>
      <button onClick={filterBridal} className={bridalClass}>BRIDAL</button>
    </section>
  );
}

export default FilterBtns;
