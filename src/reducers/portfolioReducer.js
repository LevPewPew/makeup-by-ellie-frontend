const initialState = {
  portfolioData: null
};

function portfolioReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_PORTFOLIO_DATA':
      newState = { ...state, portfolioData: action.newPortfolioData };
      break;
    default:
      newState = { ...state };
  }

  return newState;
}

export default portfolioReducer;
