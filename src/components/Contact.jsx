import React from 'react';
import axios from 'axios';
import './Contact.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Contact(props) {

  const handleClick = ()=>
  {
    axios.get(`${backendUrl}/contact/${props._id}`)
    .then(response=> {console.log(response.data)})
  }

  return (
    <div className="Contact">
      <h1>Name:{props.name}</h1>
      <h2>Contact Number:{props.mobile}</h2>
      <h2>Type of Service:{props.serviceType}</h2>
      <button style={{width:100,height:50,background:"grey",borderRadius:10,fontSize:15}} onClick={handleClick} >View Details</button>
    </div>
  )
}

export default Contact
