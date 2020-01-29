import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import logoplaceholder from '../../media/logo-placeholder.png';
import './Navbar.css';

function Navbar()  
{
  const token = localStorage.getItem('token');

  // const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  
  const state = {
    hamburgerClass: "hamburger-off"
  }

  const animateHamburger = () => {
    if (this.state.hamburgerClass === "hamburger-off") {
      this.setState({ hamburgerClass: "hamburger-on" }) 
    } else {
      this.setState({ hamburgerClass: "hamburger-off" })
    }
  }

    return (
      <nav className="Navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoplaceholder} alt="logo" height="100" width="100" data-testid="nb-link-home" />
          </Link>
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <Link to="/services" data-testid="nb-link-services">SERVICES</Link>
          </div>
          <div className="navbar-link">
            <Link to="/portfolio" data-testid="nb-link-portfolio">PORTFOLIO</Link>
          </div>
          <div className="navbar-link">
            <Link to="/faq" data-testid="nb-link-faq">FAQ</Link>
          </div>
          <div className="navbar-link">
            <Link to="/contact" data-testid="nb-link-contact">CONTACT</Link>
          </div>
          {/* temp dev zone */}
          {token?
          <div className="navbar-link">
            <Link to="/admin" data-testid="nb-link-admin">Admin</Link>
          </div>:null
          }
          {/* temp dev zone */}
        </div>
        <div id="button">
          <label>
            <div className={`${state.hamburgerClass}-container`} onClick={animateHamburger}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className={`${state.hamburgerClass}`}> 
              <ul>
                <Link to="./services" className="navbar-link" onClick={animateHamburger} ><li>SERVICES</li></Link>
                <Link to="./portfolio" className="navbar-link" onClick={animateHamburger} ><li>PORTFOLIO</li></Link>
                <Link to="./faq" className="navbar-link" onClick={animateHamburger} ><li>FAQ</li></Link>
                <Link to="./contact" className="navbar-link" onClick={animateHamburger}><li>CONTACT</li></Link>
              </ul>
            </div>
          </label>
        </div>
      </nav>
    );
}

export default Navbar;
