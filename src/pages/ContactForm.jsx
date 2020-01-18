import React from 'react';
import {Field,reduxForm} from 'redux-form';

class ContactForm extends React.Component {

   renderField = ({input,type,label}) => {
      return(
         <div>
            <label>{label}</label>
            <input {...input} type={type}/>
         </div>
      )
   }

  render()
  {
    return (   
      <form onSubmit={this.props.handleSubmit}>
        
        <Field type='text' component={this.renderField} label='Name' name='username'/>
        <Field type='number' component={this.renderField} label='Mobile' name='mobile'/>
        <Field type='date' component={this.renderField} label='Event Date' name='eventDate'/>
        <Field type='text' component={this.renderField} label='Type of Service' name='serviceType'/>
        <Field type='number' component={this.renderField} label='Number of people for makeup' name='totalPeopleJustMakeup'/>
        <Field type='number' component={this.renderField} label='Number of people for Hair' name='totalPeopleWithHair'/>
        <Field type='date' component={this.renderField} label='Time to be ready by' name='timeToFinish'/>
        <Field type='text' component={this.renderField} label='Address' name='applicationAddress'/>
        <Field type='text' component={this.renderField} label='How did you hear about us' name='howDidYouHear'/>
        <Field type='text' component={this.renderField} label='Any additional questions' name='addedQuestionsOrInfo'/>

        <button type="submit">Send Enquiry</button>

      </form>
  );
  }
  
}

export default reduxForm({form:'contact'})(ContactForm);
