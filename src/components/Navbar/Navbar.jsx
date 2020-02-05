import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../media/mbe-transparent-logo.png';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import './Navbar.scss';

function Navbar() {
  const [ hamburgerClass, setHamburgerClass ] = useState('hamburger-contracted');
  const [ servicesLinkClass, setServicesLinkClass ] = useState('inactive');
  const [ portfolioLinkClass, setPortfolioLinkClass ] = useState('inactive');
  const [ faqLinkClass, setFaqLinkClass ] = useState('inactive');
  const [ contactLinkClass, setContactLinkClass ] = useState('inactive');

  const token = useSelector((state)=> state.tokenReducer.token);
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({ type:"UPDATE_TOKEN_DATA", newToken: "" })
  }

  const setLinkToActive = (event) => {
    event.persist();
    switch (event.target.pathname) {
      case '/services':
        setServicesLinkClass('active');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        break;
      case '/portfolio':
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('active');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        break;
      case '/faq':
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('active');
        setContactLinkClass('inactive');
        break;
      case '/contact':
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('active');
        break;
      default:
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
    }
  }

  const animateHamburger = () => {
    if (hamburgerClass === 'hamburger-contracted') {
      setHamburgerClass('hamburger-expanded') ;
    } else {
      setHamburgerClass('hamburger-contracted');
    }
  }

  return (
    <nav className="Navbar">
      <div className="shish-kebab">
        <Link to="/">
          <div className="logo-crop">
            <img className="logo" src={logo} alt="logo" data-testid="nb-link-home" />
          </div>
        </Link>
        <div className="links">
          <Link
            className={servicesLinkClass}
            to="/services"
            onClick={setLinkToActive}
            data-testid="nb-link-services"
          >
            SERVICES
          </Link>
          <Link
            className={portfolioLinkClass}
            to="/portfolio"
            onClick={setLinkToActive}
            data-testid="nb-link-portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className={faqLinkClass}
            to="/faq"
            onClick={setLinkToActive}
            data-testid="nb-link-faq"
          >
            FAQ
          </Link>
          <Link
            className={contactLinkClass}
            to="/contact"
            onClick={setLinkToActive}
            data-testid="nb-link-contact"
          >
            CONTACT
          </Link>
          {
            token ?
            <>
              <Link to="/admin" data-testid="nb-link-admin">ADMIN</Link>
              <Link to="/"><button className="btn" onClick={logOut}>Logout</button></Link>
            </> :
            null
          }
        </div>
        <BtnBookNow />
        <BtnInstagram />
      </div>
      <div className="hamburger">
        <div className={`${hamburgerClass}-btn`} onClick={animateHamburger}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
        <div className={`${hamburgerClass}`}> 
          <ul>
            <Link to="./services" onClick={animateHamburger} ><li>SERVICES</li></Link>
            <Link to="./portfolio" onClick={animateHamburger} ><li>PORTFOLIO</li></Link>
            <Link to="./faq" onClick={animateHamburger} ><li>FAQ</li></Link>
            <Link to="./contact" onClick={animateHamburger}><li>CONTACT</li></Link>
            {token?<Link to="./admin" onClick={animateHamburger}><li>ADMIN</li></Link>:null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
