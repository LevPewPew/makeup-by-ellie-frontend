const initialState = {
  servicesData: []
};

function servicesReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_SERVICES_DATA':
      newState = { ...state, servicesData: action.newServicesData };
      break;
    default:
      newState = { ...state };
  }

  return newState;
}

export default servicesReducer;
