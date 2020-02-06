import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AdminPage from '../pages/AdminPage/AdminPage';
import HomePage from '../pages/HomePage/HomePage';
import ContactPage from '../pages/ContactPage/ContactPage';
import ServicePage from '../pages/ServicesPage/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage'
import FaqPage from '../pages/FaqPage/FaqPage';
import AdminLoginPage from '../pages/AdminLoginPage/AdminLoginPage';
import Footer from './Footer/Footer';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions/TermsConditions';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';
import ContactsContainer from './ContactsContainer/ContactsContainer';
import ContactDetails from './ContactDetails/ContactDetails';
import './App.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.tokenReducer.token)

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      token ? <Component {...props} /> : <Redirect to='/admin-login' />
    )} />
  )

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
        let res = await axios.get(`${backendUrl}/questions`);
        dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
      } catch (err) {
        console.log(err);
      }

      try {
        let res = await axios.get(`${backendUrl}/contact`);
        dispatch({ type: 'UPDATE_CONTACTS_DATA', newContactsData: res.data });
      } catch (err) {
        console.log(err);
      }

      dispatch({ type: 'FILTER_PORTFOLIO_DATA_BEAUTY' });

      setLoading(false);
    }

    getData();
  }, [dispatch]);

  if (loading) {
    return (
      <LoadingAnimation />
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
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <PrivateRoute exact path="/getcontactlist" component={ContactsContainer}/>
            <Route path="/getcontactlist/:id" component={ContactDetails}/>
            <Route
              path="/instagram"
              component={() => {
                let a = document.createElement('a');
                a.target= '_blank';
                a.href= 'https://www.instagram.com/makeup.by.ellie/';
                a.click();
                return null;
              }}
            />
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-and-conditions">
              <TermsConditions />
            </Route>
            <PrivateRoute path="/admin" component={AdminPage}/>
            <Route path="/admin-login">
              <AdminLoginPage />
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
