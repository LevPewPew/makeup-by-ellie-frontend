import React from 'react';
import { Link } from 'react-router-dom';
import './BtnBookNow.scss';

function BtnBookNow() {
  return (
    <Link className="BtnBookNow" to="/contact"><button className="btn">BOOK NOW</button></Link>
  );
}

export default BtnBookNow;
