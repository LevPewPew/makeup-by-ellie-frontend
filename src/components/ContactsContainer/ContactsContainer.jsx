import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from '../Contact/Contact';
import './ContactsContainer.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactsContainer() {
  const [ contactList, setContactList ] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/contact`)
    .then(response => {
      setContactList(response.data)
    })
  }, []);

  return (
    <div className="ContactsContainer">
      {contactList.map((contact,index)=> {
        return <Contact key={index} {...contact}/>
      })}
    </div>
  );
}

export default ContactsContainer;
