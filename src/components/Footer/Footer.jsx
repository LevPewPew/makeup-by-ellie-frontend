import React from 'react';
import { Link } from 'react-router-dom';
import logoplaceholder from '../../media/mbe-transparent-logo.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-logo">
        <Link to="/">
          <img src={logoplaceholder} alt="logo" height="70" width="70"/>
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/terms-and-conditions" className="page-link">TERMS AND CONDITIONS  |  </Link>
        <Link to="/privacy-policy" className="page-link">PRIVACY POLICY  |  </Link>
        {
          localStorage.getItem('token') ?
          null :
          <Link to="/admin-login" className="page-link">ADMIN LOGIN  |  </Link>
        }
        &copy; MAKEUP BY ELLIE 2019
      </div>
    </footer>
  );
}

export default Footer;
