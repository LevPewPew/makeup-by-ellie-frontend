import React from 'react';
import { Link } from 'react-router-dom';
import { FaMailBulk } from 'react-icons/fa';
import './BtnEmail.scss';

function BtnEmail() {
  return (
    <Link className="BtnEmail" to="/email"><FaMailBulk /></Link>
  )
}

export default BtnEmail;
