import React from 'react';
import {Field,reduxForm} from 'redux-form';
import './ContactForm.css';

function validate(values)
{
   let errors = {};
   // Sample validation added - Need to add more later
   if(!values.username)
   {
      errors.username="This is a required field"
   }
   return errors;
}

function warn(values)
{
   let warnings = {};
   // Sample warnings - Need to add more later
   if(!values.mobile)
   {
      warnings.mobile="You have not provided your phone number"
   }
   return warnings;
}

class ContactForm extends React.Component {

   renderField = ({input,type,label,meta:{touched,error,warning}}) => {
      return(
         <div>
            <label>{label} *</label>
            <input {...input} type={type} className='myInput'/>
            {touched && 
            ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
         </div>
      )
   }

  render()
  {
    return (   
      <form onSubmit={this.props.handleSubmit} className='contactForm'>
         <Field type='text' component={this.renderField} label='Name' name='username'/>
         <Field type='number' component={this.renderField} label='Mobile' name='mobile'/>
         <Field type='date' component={this.renderField} label='Event Date' name='eventDate'/>
         <Field type='text' component={this.renderField} label='Type of Service' name='serviceType'/>
         <Field type='number' component={this.renderField} label='Number of people for makeup' name='totalPeopleJustMakeup'/>
         <Field type='number' component={this.renderField} label='Number of people for Hair' name='totalPeopleWithHair'/>
         <Field type='text' component={this.renderField} label='Time to be ready by' name='timeToFinish'/>
         <Field type='text' component={this.renderField} label='Address' name='applicationAddress'/>
         <Field type='text' component={this.renderField} label='How did you hear about us' name='howDidYouHear'/>
         <Field type='text' component={this.renderField} label='Any additional questions' name='addedQuestionsOrInfo'/>
        <div>
        <button type="submit" className="contactFormSubmit">Send Enquiry</button>
        <button disabled={this.props.pristine||this.props.submitting} onClick={this.props.reset} className="contactFormReset">Reset Form</button> 
        </div>
      </form>
  );
  }
  
}

export default reduxForm({form:'contact',validate,warn})(ContactForm);
