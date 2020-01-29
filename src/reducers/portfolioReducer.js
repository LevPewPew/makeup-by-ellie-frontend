const initialState = {
  portfolioData: null,
  filteredPortfolioData: null
};

function portfolioReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_PORTFOLIO_DATA':
      newState = { ...state, portfolioData: action.newPortfolioData };
      break;
    case 'BRIDAL_PORTFOLIO_DATA':
      const filterBridal = state.portfolioData.filter((image) => {
        return image.category === 'bridal';
      })
      newState = { ...state, filteredPortfolioData: filterBridal };
      break;
    case 'BEAUTY_PORTFOLIO_DATA':
      const filterBeauty = state.portfolioData.filter((image) => {
        return image.category === 'beauty';
      })
      newState = { ...state, filteredPortfolioData: filterBeauty };
      break;
    case 'EDITORIAL_PORTFOLIO_DATA':
      const filterEditorial = state.portfolioData.filter((image) => {
        return image.category === 'editorial';
      })
      newState = { ...state, filteredPortfolioData: filterEditorial };
      break;
    default:
      newState = { ...state };
  }
  return newState;
}

export default portfolioReducer;


