import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FilterButtons() {
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


  return (
    <section>
      <button onClick={filterBeauty} className={beautyClass}>BEAUTY</button>
      <button onClick={filterEditorial} className={editorialClass}>EDITORIAL</button>
      <button onClick={filterBridal} className={bridalClass}>BRIDAL</button>
    </section>
  );
}

export default FilterButtons;