import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Contact from './Contact';
import './ContactContainer.css'

function ContactContainer() {

  const initialState = []
  const [contactList,setContactList] = useState(initialState);

  useEffect(() => {
    axios.get('http://localhost:8000/contact')
    .then(response => {
      setContactList(response.data)
    })
  },[])

  
  return (
    <div className="myContactContainer">
      <h1>Contact List header</h1>
      {contactList.map((contact,index)=> {
        return <Contact key={index} {...contact}/>
      })}
    </div>
  )
}

export default ContactContainer
