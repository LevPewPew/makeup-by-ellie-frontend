import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AdminPage from '../pages/AdminPage/AdminPage';
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ServicePage from '../pages/ServicesPage/ServicesPage';
import FaqPage from '../pages/FaqPage/FaqPage';
import Footer from './Footer/Footer';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import TermsConditions from '../pages/terms-conditions/TermsConditions';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';
// TESTING, remove before deployment
import ContactsContainer from './ContactsContainer';
// TESTING, remove before deployment
import './App.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        let res = await axios.get(`${backendUrl}/portfolio`);
        dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/services`);
        dispatch({ type: 'UPDATE_SERVICES_DATA', newServicesData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/FAQ`);
        dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }

    getData();
  }, [dispatch])

  if (loading) {
    return (
      <LoadingAnimation
        type={'spinningBubbles'}
      />
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/services">
              <ServicePage />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            {/* TESTING, remove before deployment*/}
            <Route path="/getcontactlist">
              <ContactsContainer />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-and-conditions">
              <TermsConditions />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            {/* TESTING, remove before deployment*/}
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
