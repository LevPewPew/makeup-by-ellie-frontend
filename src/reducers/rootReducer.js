import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import servicesReducer from './servicesReducer';
import questionsReducer from './questionsReducer';
import contactsReducer from './contactsReducer';
import adminDashReducer from './adminDashReducer';
import tokenReducer from './tokenReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  portfolioReducer,
  servicesReducer,
  questionsReducer,
  contactsReducer,
  adminDashReducer,
  tokenReducer,
  // redux forms needs the reducer to have the name "form", in order to work, do not change this
  form: formReducer
});
