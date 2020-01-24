import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AdminPage from '../pages/AdminPage/AdminPage';
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ServicePage from '../pages/ServicesPage/ServicesPage';
import FaqPage from '../pages/FaqPage/FaqPage';
import Footer from './footer/Footer';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import TermsConditions from '../pages/terms-conditions/TermsConditions';
// Just for test
import ContactsContainer from './ContactsContainer';

import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route path="/contact"><ContactPage/></Route>
            <Route path="/services"><ServicePage/></Route>
            <Route path="/faq"><FaqPage/></Route>
            {/*Below route is just for testing*/}
            <Route path="/getcontactlist"><ContactsContainer/></Route>
            <Route path="/privacy-policy"><PrivacyPolicy/></Route>
            <Route path="/terms-and-conditions"><TermsConditions/></Route>
            <Route path="/admin"><AdminPage/></Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
        <div>TESTING GCS CI</div>
      </div>
    </Provider>
  );
}

export default App;
