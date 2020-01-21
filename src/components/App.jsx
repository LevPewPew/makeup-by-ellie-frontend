import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import HomePage from '../pages/home/HomePage.jsx';
import ContactPage from '../pages/contact/ContactPage';
import Footer from './footer/Footer.jsx';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy.jsx';
import TermsConditions from '../pages/terms-conditions/TermsConditions.jsx';
import ContactListPage from '../pages/contactList/ContactListPage';

import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Switch>
                <Route exact path="/"><HomePage/></Route>
                <Route path="/contact"><ContactPage/></Route>
                <Route path="/getcontactlist"><ContactListPage/></Route>
                <Route path="/privacy-policy"><PrivacyPolicy/></Route>
                <Route path="/terms-and-conditions"><TermsConditions/></Route>
              </Switch>
              <Footer/>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
