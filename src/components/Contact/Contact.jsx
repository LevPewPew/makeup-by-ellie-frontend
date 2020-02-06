import React from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function Contact(props) {
  const { _id, mobile, serviceType } = props;
  return (
    <article className="Contact">
      <h2>{props.name}</h2>
      <p>
        <strong>Phone:&nbsp;&nbsp;</strong>{mobile}
      </p>
      <p>
        <strong>Service:&nbsp;&nbsp;</strong>{_.upperFirst(serviceType)}
      </p>
      <Link to={`/getcontactlist/${_id}`}>
        <button className="btn">View Details</button>
      </Link>
    </article>
  );
}

export default Contact;
