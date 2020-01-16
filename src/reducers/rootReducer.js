import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  portfolioReducer,
  // redux forms needs the reducer to have the name "form", in order to work, do not change this
  form: formReducer
});
