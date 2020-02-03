import React from 'react';
import './Contact.scss';
import {Link} from 'react-router-dom';

function Contact(props) {

  return (
    <article className="Contact">
      <h2>Name:{props.name}</h2>
      <h3>Contact Number:{props.mobile}</h3>
      <h3>Type of Service:{props.serviceType}</h3>
      <Link to={`/getcontactlist/${props._id}`}>View Details</Link>
    </article>
  );
}

export default Contact
