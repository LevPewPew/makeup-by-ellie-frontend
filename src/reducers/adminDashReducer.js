const initialState = {
  onAdminDash: false
};

function adminDashReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_ON_ADMIN_DASH':
      newState = {...state, onAdminDash: action.newOnAdminDash};
      break;
    default:
      newState = {...state};
  }

  return newState;
}

export default adminDashReducer;
