import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Axios from 'axios';
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

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      let portfolioPromise = Axios.get(`${backendUrl}/portfolio`);
      let servicesPromise = Axios.get(`${backendUrl}/services`);
      const [portfolio, services] = await Promise.all([portfolioPromise, servicesPromise])
      dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: portfolio.data });
      dispatch({type: 'UPDATE_SERVICES_DATA', newServicesData: services.data})
      setLoading(false)
    }
    getData()
  }, [dispatch])

  if (loading) {
    return null
  } else {
    return (
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
      </div>
    );
  }
}

export default App;
