import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ContactList from '../../components/ContactList.jsx';
import './ContactListPage.css'

function ContactListPage() {

  const initialState = []
  const [contactList,setContactList] = useState(initialState);

  useEffect(() => {
    axios.get('http://localhost:8000/contact')
    .then(response => {
      setContactList(response.data)
    })
  },[])

  
  return (
    <div className="myContactListPage">
      <h1>Contact List header</h1>
      {contactList.map(contact=> {
        return <div ><ContactList {...contact}/></div>
      })}
    </div>
  )
}

export default ContactListPage
