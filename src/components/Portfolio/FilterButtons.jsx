import React from 'react';
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

  return (
    <section>
      <button onClick={filterBeauty}>Beauty</button>
      <button onClick={filterEditorial}>Editorial</button>
      <button onClick={filterBridal}>Bridal</button>
    </section>
  );
}

export default FilterButtons;
