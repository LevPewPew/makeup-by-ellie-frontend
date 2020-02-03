const initialState = {
  portfolioData: [],
  filteredPortfolioData: []
};

function portfolioReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_PORTFOLIO_DATA':
      newState = { ...state, portfolioData: action.newPortfolioData };
      break;
    case 'FILTER_PORTFOLIO_DATA_BEAUTY':
      const filterBeauty = state.portfolioData.filter((image) => {
        return image.category === 'beauty';
      });
      newState = { ...state, filteredPortfolioData: filterBeauty };
      break;
    case 'FILTER_PORTFOLIO_DATA_EDITORIAL':
      const filterEditorial = state.portfolioData.filter((image) => {
        return image.category === 'editorial';
      });
      newState = { ...state, filteredPortfolioData: filterEditorial };
      break;
    case 'FILTER_PORTFOLIO_DATA_BRIDAL':
      const filterBridal = state.portfolioData.filter((image) => {
        return image.category === 'bridal';
      });
      newState = { ...state, filteredPortfolioData: filterBridal };
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default portfolioReducer;
