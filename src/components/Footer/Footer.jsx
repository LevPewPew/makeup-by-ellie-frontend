import React from 'react';
import { Link } from 'react-router-dom';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="links">
        <div className="socials">
          <BtnInstagram />
          <p>INSTAGRAM</p>
        </div>
        <div>|</div>
        <div className="legal">
          <Link to="/terms-and-conditions">TERMS AND CONDITIONS</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; 2020 MAKEUP BY ELLIE Makeup Artist and Hair Stylist Melbourne, Australia. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
