import React from 'react';
import axios from 'axios';
import './Contact.scss';
import { Link } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Contact(props) {

  const handleClick = () => {
    return 
  }

  return (
    <article className="Contact">
      <h2>Name:{props.name}</h2>
      <h3>Contact Number:{props.mobile}</h3>
      <h3>Type of Service:{props.serviceType}</h3>
      <button style={{ width: "100px", height: "50px", background: "grey", borderRadius: "10px", fontSize: "15px" }} onClick={handleClick}><Link to={`/getcontactlist/${props._id}`} /></button>
    </article>
  );
}

export default Contact
