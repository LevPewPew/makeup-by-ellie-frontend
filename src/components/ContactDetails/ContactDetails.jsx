import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './ContactDetails.scss';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactById(props) {

  const [contact,setContact] = useState({});

  useEffect(() => {
    axios.get(`${backendUrl}/contact/${props.match.params.id}`)
    .then(response=> {console.log(response.data);
      setContact(response.data[0])})
  }, [])

  return (
    
    <div className="ContactDetails">
      <h1>Contact Details</h1>
      <h3>Name:</h3>{contact.name}
      <h3>Mobile:</h3>{contact.mobile}
      <h3>Event Date:</h3>{contact.eventDate}
      <h3>Type of Service:</h3>{contact.serviceType}
      <h3>Time to be ready by:</h3>{contact.timeToFinish}
      <h3>Number of people for makeup:</h3>{contact.totalPeopleJustMakeup}
      <h3>Number of people for hair:</h3>{contact.totalPeopleWithHair}
      <h3>Address:</h3>{contact.applicationAddress || "Ellie's Home address"}
      <h3>How did you hear about us:</h3>{contact.howDidYouHear}
      <h3>Comments:</h3>{contact.addedQuestionsOrInfo}
    </div>
  )
}

export default ContactById
