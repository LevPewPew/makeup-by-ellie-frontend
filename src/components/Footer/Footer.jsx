import React from 'react';
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
        <a
          href="https://drive.google.com/file/d/1aYwab4Kp83ooPV1opllLKQGOSg11D9RO/view"
          target="_blank"
        >
          <span className="full-tnc">TERMS AND CONDITIONS</span>
          <span className="small-tnc">T &#38; C</span>
        </a>
      </div>
      <div className="copyright">
        Copyright &copy; 2022 MAKEUP BY ELLIE.&nbsp;&nbsp;Makeup Artist and Hair
        Stylist.&nbsp;&nbsp;Melbourne, Australia.&nbsp;&nbsp;All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
