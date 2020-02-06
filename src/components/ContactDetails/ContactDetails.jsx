import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactDetails.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactById(props) {
  const [ contact, setContact ] = useState({});

  useEffect(() => {
    async function getContactDetails() {
      try {
        let res = await axios.get(`${backendUrl}/contact/${props.match.params.id}`);
        setContact(res.data[0]);
      } catch (err) {
        
      }
    }
    
    getContactDetails();
  }, []);

  return (
    <div className="ContactDetails">
      <h2>Contact Details</h2>
      <table>
        <tr>
          <td><strong>NAME</strong></td>
          <td>{contact.name}</td>
        </tr>
        <tr>
          <td><strong>MOBILE</strong></td>
          <td>{contact.mobile}</td>
        </tr>
        <tr>
          <td><strong>DATE</strong></td>
          <td>{contact.eventDate}</td>
        </tr>
        <tr>
          <td><strong>SERVICE</strong></td>
          <td>{contact.serviceType}</td>
        </tr>
        <tr>
          <td><strong>FINISH BY</strong></td>
          <td>{contact.timeToFinish}</td>
        </tr>
        <tr>
          <td><strong>ONLY MAKEUP</strong></td>
          <td>{contact.totalPeopleJustMakeup}</td>
        </tr>
        <tr>
          <td><strong>MAKEUP AND HAIR</strong></td>
          <td>{contact.mobile}</td>
        </tr>
        <tr>
          <td><strong>ADDRESS</strong></td>
          <td>{contact.applicationAddress || "Ellie's Home address"}</td>
        </tr>
        <tr>
          <td><strong>HEARD OF ME FROM</strong></td>
          <td>{contact.mobile}</td>
        </tr>
        <tr>
          <td><strong>EXTRA INFO/QUESTIONS</strong></td>
          <td>{contact.mobile}</td>
        </tr>
      </table>

      {/* <p><strong>Name: </strong>{contact.name}</p>
      <p><strong>Mobile: </strong>{contact.mobile}</p>
      <p><strong>Event Date: </strong>{contact.eventDate}</p>
      <p><strong>Type of Service: </strong>{contact.serviceType}</p>
      <p><strong>Time to be ready by: </strong>{contact.timeToFinish}</p>
      <p><strong>Number of people for makeup: </strong>{contact.totalPeopleJustMakeup}</p>
      <p><strong>Number of people for hair: </strong>{contact.totalPeopleWithHair}</p>
      <p><strong>Address: </strong>{contact.applicationAddress || "Ellie's Home address"}</p>
      <p><strong>How did you hear about us: </strong>{contact.howDidYouHear}</p>
      <p><strong>Additional info/questions: </strong>{contact.addedQuestionsOrInfo}</p> */}
    </div>
  );
}

export default ContactById;
