const initialState = {
  onAdminDash: false,
  token: ''
};

function adminDashReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_ON_ADMIN_DASH':
      newState = { ...state, onAdminDash: action.newOnAdminDash, token: action.newToken  };
      break;
    default:
      newState = { ...state };
  }

  return newState;
}

export default adminDashReducer;
