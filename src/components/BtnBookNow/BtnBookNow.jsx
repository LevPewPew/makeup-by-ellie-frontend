import React from 'react';
import { Link } from 'react-router-dom';
import './BtnBookNow.scss';

function BtnBookNow({ customText, customLink }) {
  return (
    <Link
      className="BtnBookNow"
      to={{ pathname: customLink ?? '/contact' }}
      target={customLink ? '_blank' : undefined}
    >
      <button className="btn">{customText ?? 'BOOK NOW'}</button>
    </Link>
  );
}

export default BtnBookNow;
