const initialState = {
  onAdminDash: false,
  successfulSubmit: false,
  editingForm: false
};

function adminDashReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_ON_ADMIN_DASH':
      newState = { ...state, onAdminDash: action.newOnAdminDash };
      break;
    case 'SUCCESSFUL_SUBMIT':
      newState = { ...state, successfulSubmit: true };
      break;
    case 'NO_SUCCESSFUL_SUBMIT':
      newState = { ...state, successfulSubmit: false };
      break;
    case 'EDITING_FORM':
      newState = { ...state, editingForm: action.documentId };
      break;
    case 'NOT_EDITING_FORM':
      newState = { ...state, editingForm: false };
      break;
    default:
      newState = { ...state };
  }

  return newState;
}

export default adminDashReducer;
