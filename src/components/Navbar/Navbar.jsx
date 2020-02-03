import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logoplaceholder from '../../media/mbe-transparent-logo.png';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import './Navbar.scss';

function Navbar() {
  const [ hamburgerClass, setHamburgerClass ] = useState('hamburger-off');
  const [ servicesLinkClass, setServicesLinkClass ] = useState(null);
  const [ portfolioLinkClass, setPortfolioLinkClass ] = useState(null);
  const [ faqLinkClass, setFaqLinkClass ] = useState(null);
  const [ contactLinkClass, setContactLinkClass ] = useState(null);

  const token = useSelector((state)=> state.tokenReducer.token);
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({type:"UPDATE_TOKEN_DATA",newToken:""})
  }

  const setLinkToActive = (link) => {
    // setActiveLinkClass("")
  }

  const animateHamburger = () => {
    if (hamburgerClass === 'hamburger-off') {
      setHamburgerClass('hamburger-on') ;
    } else {
      setHamburgerClass('hamburger-off');
    }
  }

  return (
    <nav className="Navbar">
      <Link to="/">
        <div className="logo-crop">
          <img className="logo" src={logoplaceholder} alt="logo" data-testid="nb-link-home" />
        </div>
      </Link>
      <div className="links">
        <Link className={servicesLinkClass} to="/services" data-testid="nb-link-services">SERVICES</Link>
        <Link className={portfolioLinkClass} to="/portfolio" data-testid="nb-link-portfolio">PORTFOLIO</Link>
        <Link className={faqLinkClass} to="/faq" data-testid="nb-link-faq">FAQ</Link>
        <Link className={contactLinkClass} to="/contact" data-testid="nb-link-contact">CONTACT</Link>
        {
          token ?
          <>
            <Link to="/admin" data-testid="nb-link-admin">Admin</Link>
            <Link to="/"><button onClick={logOut}>Logout</button></Link>
          </> :
          null
        }
      </div>
      <BtnBookNow />
      <BtnInstagram />
      <div id="button">
        <label>
          <div className={`${hamburgerClass}-container`} onClick={animateHamburger}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={`${hamburgerClass}`}> 
            <ul>
              <Link to="./services" className="navbar-link" onClick={animateHamburger} ><li>SERVICES</li></Link>
              <Link to="./portfolio" className="navbar-link" onClick={animateHamburger} ><li>PORTFOLIO</li></Link>
              <Link to="./faq" className="navbar-link" onClick={animateHamburger} ><li>FAQ</li></Link>
              <Link to="./contact" className="navbar-link" onClick={animateHamburger}><li>CONTACT</li></Link>
              {token?<Link to="./admin" className="navbar-link" onClick={animateHamburger}><li>ADMIN</li></Link>:null}
            </ul>
          </div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
