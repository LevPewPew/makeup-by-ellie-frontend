import React from 'react';
import './ContactList.css';

import axios from 'axios';

function ContactList(props) {

  const handleClick = ()=>
  {
    axios.get(`http://localhost:8000/contact/${props._id}`)
    .then(response=> {console.log(response.data)})
  }

  return (
    <div className="mycontactList">
      <h1>Name:{props.name}</h1>
      <h2>Contact Number:{props.mobile}</h2>
      <h2>Type of Service:{props.serviceType}</h2>
      <button style={{width:100,height:50,background:"grey",borderRadius:10,fontSize:15}} onClick={handleClick} >View Details</button>
    </div>
  )
}

export default ContactList
