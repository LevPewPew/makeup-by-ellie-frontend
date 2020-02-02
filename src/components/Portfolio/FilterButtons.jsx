import React from 'react';
import { useDispatch } from 'react-redux';

function FilterButtons() {
  const dispatch = useDispatch();

  function filterBridal() {
    dispatch({ type: 'BRIDAL_PORTFOLIO_DATA' })
  }

  function filterBeauty() {
    dispatch({ type: 'BEAUTY_PORTFOLIO_DATA' })
  }

  function filterEditorial() {
    dispatch({ type: 'EDITORIAL_PORTFOLIO_DATA' })
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
