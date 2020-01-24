import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logoplaceholder from '../../media/logo-placeholder.png';
import "./Navbar.css";


export default class Navbar extends Component {
  state = {
    hamburgerClass: "hamburger-off"
  }

  animateHamburger = () => {
    if (this.state.hamburgerClass === "hamburger-off") {
      this.setState({hamburgerClass: "hamburger-on"}) 
    } else {
      this.setState({hamburgerClass: "hamburger-off"})
    }
  }


  render() {
    return (
      <div>
        <nav>
          <div className="navbar">
          <div className="navbar-logo">
            < Link to="/"><img src={logoplaceholder} alt="logo" height="100" width="100" data-testid="nb-link-home" /></Link></div>
          </div> 
            <div className="navbar-links">
              <div className="navbar-link"><Link to="/services" data-testid="nb-link-services">SERVICES</Link></div>
              <div className="navbar-link"><Link to="/portfolio" data-testid="nb-link-portfolio">PORTFOLIO</Link></div>
              <div className="navbar-link"><Link to="/faq" data-testid="nb-link-faq">FAQ</Link></div>
              <div className="navbar-link"><Link to="/contact" data-testid="nb-link-contact">Contact  </Link></div>
              {/* temp dev zone */}
              <div className="navbar-link"><Link to="/admin" data-testid="nb-link-admin">ADMIN</Link></div>
              {/* temp dev zone */}
              
            </div>
            <div id="button">
              <label>
              <div className={`${this.state.hamburgerClass}-container`} onClick={this.animateHamburger}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
                <div className={`${this.state.hamburgerClass}`}> 
                  <ul>
                    <Link to="./services" className="navbar-link" onClick={this.animateHamburger} ><li>SERVICES</li></Link>
                    <Link to="./portfolio" className="navbar-link" onClick={this.animateHamburger} ><li>PORTFOLIO</li></Link>
                    <Link to="./faq" className="navbar-link" onClick={this.animateHamburger} ><li>FAQ</li></Link>
                    <Link to="./contact" className="navbar-link" onClick={this.animateHamburger}><li>CONTACT</li></Link>
                  </ul>
              </div>
            </label>
          </div>
        </nav>
      </div> 
    );
  }
}