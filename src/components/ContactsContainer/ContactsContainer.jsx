import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import './ContactsContainer.scss';

function ContactsContainer() {
  const contactsData = useSelector((state) => state.contactsReducer.contactsData);

  return (
    <div className="ContactsContainer">
      {
        contactsData ?
        contactsData.map((contact, index) => {
          return <Contact
            key={index}
            {...contact}
          />
        }) :
        null
      }
    </div>
  );
}

export default ContactsContainer;
