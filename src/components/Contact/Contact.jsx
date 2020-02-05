import React from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';

function Contact(props) {

  return (
    <article className="Contact">
      <h2>{props.name}</h2>
      <p>
        <strong>Phone:&nbsp;&nbsp;</strong>{props.mobile}
      </p>
      <p>
        <strong>Service:&nbsp;&nbsp;</strong>{props.serviceType}
      </p>
      <Link to={`/getcontactlist/${props._id}`}>View Details</Link>
    </article>
  );
}

export default Contact;
