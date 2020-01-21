import React from 'react';
import ContactForm from '../../components/ContactForm.jsx';
import axios from 'axios';

class ContactPage extends React.Component {

   submit = (values) => {
      axios.post('http://localhost:8000/contact',values)
      .then(res=>alert(res.data))
      .catch(err=> console.log(err))
   }

  render()
  {
    return (   
       <div>
          <h1>Form Header</h1>
          
          <ContactForm onSubmit={this.submit}/>
       </div>
      
      )
  }
  
}

export default ContactPage
