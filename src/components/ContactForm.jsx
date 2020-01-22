import React from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux'
import './ContactForm.css';
import DropdownListField from './DropdownListField';

const categories = [ { category: 'Bridal', value: 'bridal' },
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' } ];


function validate(values)
{
   let errors = {};
   // Sample validation added - Need to add more later
   if(!values.name)
   {
      errors.name="This is a required field"
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

   

   renderField = ({input,type,label,meta:{touched,error,warning,value}}) => {
      return(
         <div>
            <label>{label} *</label>
            <input {...input} type={type} value={value} className='myInput'/>
            {touched && 
            ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
         </div>
      )
   }


   renderDropdownListField({input, label, meta: {touched, error, warning}}) {
      return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <label htmlFor="">{label}: </label>
          <div className='myInput'>
            <DropdownListField
              input={input}
              data={categories}
              valueField="value"
              textField="category"
            />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </div>
      )
    }


  render()
  {
    return (   
      <form onSubmit={this.props.handleSubmit} className='contactForm'>
         <Field type='text' component={this.renderField} label='Name' name='name'/>
         <Field type='number' component={this.renderField} label='Mobile' name='mobile'/>
         <Field type='date' component={this.renderField} label='Event Date' name='eventDate'/>
         
         <Field
          name="serviceType"
          component={this.renderDropdownListField}
          data={categories}
          valueField="value"
          textField="category" label="Type of Service"
        />
         <Field type='number' component={this.renderField} label='Number of people for makeup' name='totalPeopleJustMakeup'/>
         <Field type='number' component={this.renderField} label='Number of people for Hair' name='totalPeopleWithHair'/>
         <Field type='date' component={this.renderField} label='Time to be ready by' name='timeToFinish'/>
         {(parseInt(this.props.number1)+parseInt(this.props.number2))>3
         && <Field type='text' component={this.renderField} label='Address' name='applicationAddress'/>}
         <Field type='text' component={this.renderField} label='How did you hear about us' name='howDidYouHear'/>
         <Field type='text' component={this.renderField} label='Any additional questions' name='addedQuestionsOrInfo'/>
        <div style={{marginRight:20}}>
        <button type="submit" className="contactFormSubmit">Send Enquiry</button>
        <button disabled={this.props.pristine||this.props.submitting} onClick={this.props.reset} className="contactFormReset">Reset Form</button> 
        </div>
      </form>
  );
  }
  
}

ContactForm = reduxForm({
   form: 'contact',validate,warn  
 })(ContactForm)
 
 
 const selector = formValueSelector('contact')
 ContactForm = connect(
   state => {
    
      return {
         number1: selector(state, 'totalPeopleJustMakeup'),
         number2: selector(state, 'totalPeopleWithHair'),
       }
   }
 )(ContactForm)

 export default ContactForm