import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './BtnInstagram.scss';

function BtnInstagram() {
  return (
    <Link className="BtnInstagram" to="/instagram"><FaInstagram /></Link>
  )
}

export default BtnInstagram;
