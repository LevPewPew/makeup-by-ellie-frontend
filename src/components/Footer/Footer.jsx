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
          <a href="https://www.instagram.com/makeup.by.ellie/" target="_blank">
            <p>INSTAGRAM</p>
          </a>
        </div>
        <div>|</div>
        <div className="legal">
          <Link to="/terms-and-conditions">TERMS AND CONDITIONS</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; 2020 MAKEUP BY ELLIE.&nbsp;&nbsp;Makeup Artist and Hair Stylist.&nbsp;&nbsp;Melbourne, Australia.&nbsp;&nbsp;All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
