import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Contact from './Contact';
import './ContactsContainer.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactsContainer() {

  const initialState = []
  const [contactList,setContactList] = useState(initialState);

  useEffect(() => {
    axios.get(`${backendUrl}/contact`)
    .then(response => {
      setContactList(response.data)
    })
  },[])

  
  return (
    <div className="ContactsContainer">
      {contactList.map((contact,index)=> {
        return <Contact key={index} {...contact}/>
      })}
    </div>
  )
}

export default ContactsContainer
