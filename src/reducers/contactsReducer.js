const initialState = {
  contactsData: []
};

function contactsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_CONTACTS_DATA':
      newState = { ...state, contactsData: action.newContactsData };
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default contactsReducer;
