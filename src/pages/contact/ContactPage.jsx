import React from 'react';
import ContactForm from '../../components/ContactForm.jsx'

class ContactPage extends React.Component {

   submit = (values) => {
      console.log(values)
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
