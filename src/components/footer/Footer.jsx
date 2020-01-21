import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logoplaceholder from '../../media/logo-placeholder.png';
import './Footer.css';

function Heart() {
  const heartElement = <FontAwesomeIcon icon={faHeart} />
  return (heartElement);
  }


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <footer>
        <div className="footer-logo">
          < Link to="/"><img src={logoplaceholder} alt="logo" height="70" width="70"/></Link>
        </div>
        <div className="footer-links">
          < Link to="/terms-and-conditions" id="page-link">TERMS AND CONDITIONS  |  </Link>
          < Link to="/privacy-policy" id="page-link">PRIVACY POLICY  |  </Link>
            Made with <Heart className='heart-logo'/> &copy; MAKEUP BY ELLIE 2019
        </div>
      </footer>
      </div>
    )
  }
}