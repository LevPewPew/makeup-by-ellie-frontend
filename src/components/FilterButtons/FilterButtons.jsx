import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FilterButtons() {
  const dispatch = useDispatch();

  function filterBeauty() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_BEAUTY' });
  }

  function filterEditorial() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_EDITORIAL' });
  }

  function filterBridal() {
    dispatch({ type: 'FILTER_PORTFOLIO_DATA_BRIDAL' });
  }

  const [ beautyLinkClass, setBeautyLinkClass ] = useState('inactive');
  const [ editorialLinkClass, setEditorialLinkClass ] = useState('inactive');
  const [ bridalLinkClass, setBridalLinkClass ] = useState('inactive');

  const setFilterToActive = (event) => {
    event.persist();
    switch (event.target.pathname) {
      case {filterBeauty}:
        setBeautyLinkClass('active');
        setEditorialLinkClass('inactive');
        setBridalLinkClass('inactive');
        break;
      case filterEditorial():
        setBeautyLinkClass('inactive');
        setEditorialLinkClass('active');
        setBridalLinkClass('inactive');
        break;
      case filterBridal():
        setBeautyLinkClass('inactive');
        setEditorialLinkClass('inactive');
        setBridalLinkClass('active');
        break;
      default:
        setBeautyLinkClass('active');
        setEditorialLinkClass('inactive');
        setBridalLinkClass('inactive');
    }
  }

  return (
    <section>
      <button 
      className={beautyLinkClass} 
      onClick={ 
        {setFilterToActive},
        {filterBeauty}
      }>Beauty</button>
      <button 
      className={editorialLinkClass} 
      onClick={ 
        {setFilterToActive},
        {filterEditorial}
      }>Editorial</button>
      <button 
      className={bridalLinkClass} 
      onClick={ 
        {setFilterToActive},
        {filterBridal}
      }>Bridal</button>
    </section>
  );
}

export default FilterButtons;