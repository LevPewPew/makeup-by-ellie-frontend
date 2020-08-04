import React from 'react';
import { Link } from 'react-router-dom';
import BtnInstagram from '../BtnInstagram/BtnInstagram';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="links">
        <div className="icon-link">
          <BtnInstagram />
          <a href="https://www.instagram.com/makeup.by.ellie/" target="_blank">
            <span>INSTAGRAM</span>
          </a>
        </div>
        <span>|</span>
        <Link to="/terms-and-conditions"><span>TERMS AND CONDITIONS</span></Link>
        <span>|</span>
        <Link to="/privacy-policy"><span>PRIVACY POLICY</span></Link>
      </div>
      <div className="copyright">
        Copyright &copy; 2020 MAKEUP BY ELLIE.&nbsp;&nbsp;Makeup Artist and Hair Stylist.&nbsp;&nbsp;Melbourne, Australia.&nbsp;&nbsp;All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
