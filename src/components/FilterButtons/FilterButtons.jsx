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
      <button className="btn" onClick={filterBeauty}>Beauty</button>
      <button className="btn" onClick={filterEditorial}>Editorial</button>
      <button className="btn" onClick={filterBridal}>Bridal</button>
    </section>
  );
}

export default FilterButtons;
