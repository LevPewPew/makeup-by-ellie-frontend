const initialState = {
  token: localStorage.getItem('token')
};

function tokenReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_TOKEN_DATA':
      newState = { ...state, token: action.newToken };
      break;
    default:
      newState = { ...state };
  }

  return newState;
}

export default tokenReducer;
