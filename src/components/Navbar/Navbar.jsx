import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../media/mbe-transparent-logo.png';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import BtnLogout from '../BtnLogout/BtnLogout';
import './Navbar.scss';

function Navbar() {
  const [ hamburgerClass, setHamburgerClass ] = useState('hamburger-contracted');
  const [ aboutMeLinkClass, setAboutMeLinkClass ] = useState('inactive');
  const [ servicesLinkClass, setServicesLinkClass ] = useState('inactive');
  const [ portfolioLinkClass, setPortfolioLinkClass ] = useState('inactive');
  const [ faqLinkClass, setFaqLinkClass ] = useState('inactive');
  const [ contactLinkClass, setContactLinkClass ] = useState('inactive');
  const [ adminDashLinkClass, setAdminDashLinkClass ] = useState('inactive');

  const token = useSelector((state) => state.tokenReducer.token);

  // there are better ways to do this but ran out of time
  const setLinkToActive = (event) => {
    event.persist();
    switch (event.target.pathname) {
      case '/about-me':
        setAboutMeLinkClass('active');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('inactive');
        break;
      case '/services':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('active');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('inactive');
        break;
      case '/portfolio':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('active');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('inactive');
        break;
      case '/faq':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('active');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('inactive');
        break;
      case '/contact':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('active');
        setAdminDashLinkClass('inactive');
        break;
      case '/admin':
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('active');
        break;
      default:
        setAboutMeLinkClass('inactive');
        setServicesLinkClass('inactive');
        setPortfolioLinkClass('inactive');
        setFaqLinkClass('inactive');
        setContactLinkClass('inactive');
        setAdminDashLinkClass('inactive');
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
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" data-testid="nb-link-home" />
          </div>
        </Link>
        <div className="links">
          <Link
            className={aboutMeLinkClass}
            to="/about-me"
            onClick={setLinkToActive}
            data-testid="nb-link-services"
          >
            ABOUT
          </Link>
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
            <div className="admin-nav-container">
              <Link
                className={adminDashLinkClass}
                to="/admin"
                onClick={setLinkToActive}
                data-testid="nb-link-admin"
              >
                ADMIN
              </Link>
              <Link className="logout-anchor" to="/"><BtnLogout /></Link>
            </div> :
            null
          }
        </div>
        <BtnBookNow />
        <BtnInstagram />
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
              <div className={"book-insta-container"}>
                <BtnBookNow />
                <BtnInstagram />
              </div>
              {token ?
                <>
                  <Link to="./admin" onClick={animateHamburger}><li>ADMIN</li></Link>
                  <Link to="/"><BtnLogout/></Link>
                </> :
              null}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
