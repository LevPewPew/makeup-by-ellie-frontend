const initialState = {
  questionsData: []
};

function questionsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'UPDATE_QUESTIONS_DATA':
      newState = { ...state, questionsData: action.newQuestionsData };
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default questionsReducer;
