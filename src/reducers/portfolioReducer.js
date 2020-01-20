const initialState = {
  portfolioData: null,
  // just an object to force a state change, just keep passing this the shallow copy of this object
  refreshData: { refresh: 'yes' }
};

function portfolioReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_PORTFOLIO_DATA':
      newState = {...state, portfolioData: action.newPortfolioData};
      break;
    case 'REFRESH_PORTFOLIO_DATA':
      newState = {...state, refreshData: action.refresh};
      break;
    default:
      newState = {...state};
  }

  return newState;
}

export default portfolioReducer;
