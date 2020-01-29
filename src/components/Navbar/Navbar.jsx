import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import logoplaceholder from '../../media/logo-placeholder.png';
import './Navbar.css';

function Navbar()  
{
  let token = localStorage.getItem('token');

  const logOut = () => {
    localStorage.clear();
  }
  
  const [hamburgerClass,setHamburgerClass] = useState("hamburger-off");

  const animateHamburger = () => {
    if (hamburgerClass === "hamburger-off") {
      setHamburgerClass("hamburger-on") 
    } else {
      setHamburgerClass("hamburger-off")
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
            <button onClick={logOut}>Logout</button>
          </div>:null
          }
          {/* temp dev zone */}
        </div>
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
