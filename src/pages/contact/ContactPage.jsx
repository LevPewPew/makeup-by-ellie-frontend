import React from 'react';
import ContactForm from '../../components/ContactForm.jsx';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

class ContactPage extends React.Component {

   submit = (values) => {
      axios.post(`${backendUrl}/contact`,values)
      .then(res=>alert(res.data))
      .catch(err=> console.log(err))
   }

  render()
  {
    return (   
       <div className="ContactPage">
          <h1>Form Header</h1>    
          <ContactForm onSubmit={this.submit}/>
       </div>
      
      )
  }
  
}

export default ContactPage
