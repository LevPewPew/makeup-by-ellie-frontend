import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import DropdownListField from '../DropdownListField/DropdownListField';
import './ContactForm.scss';

const categories = [
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' },
  { category: 'Bridal', value: 'bridal' }
];

function validate(values) {
   let errors = {};

   if(!values.name) {
      errors.name='This is a Required Field';
   }

   if(!values.mobile) {
      errors.mobile='This is a Required Field';
   } 

  if(!values.email) {
    errors.email='This is a Required Field';
  } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
    errors.email = 'Invalid email address'
  }

  if(!values.eventDate) {
    errors.eventDate='This is a Required Field';
  } 

  if(!values.serviceType) {
    errors.serviceType='This is a Required Field';
  } 
  
  if(!values.totalPeopleJustMakeup) {
    errors.totalPeopleJustMakeup='This is a Required Field';
  }

  if(!values.totalPeopleWithHair) {
    errors.totalPeopleWithHair='This is a Required Field';
  }

  if(!values.timeToFinish) {
    errors.timeToFinish='This is a Required Field';
  }

  if(!values.howDidYouHear) {
    errors.howDidYouHear='This is a Required Field';
  }

   return errors;
}


function ContactForm(props) 

{
  const renderField = ({autoFocus,placeholder,input,type,label,number1,number2,meta:{touched,error}}) => {
    if (input.name === "applicationAddress") {
        return(
          <div>
            <label>{label} *</label>
            <input {...input} type={type} className='myInput' placeholder={placeholder} autoFocus={autoFocus} disabled={(parseInt(number1) + parseInt(number2)) > 2 ? false : true }/>
            {touched && 
            ((error && <div style={{color:"red"}}>{error}</div>))}
          </div>
      )
    }
    return(
        <div>
          <label>{label} *</label>
          <input {...input} type={type} className='myInput' placeholder={placeholder} autoFocus={autoFocus}/>
          {touched && 
          ((error && <div style={{color:"red"}}>{error}</div>))}
        </div>
    )
  }

  const renderDropdownListField = ({placeholder,input, label, meta: {touched, error}}) => 
  {
    return (
      <div className='dropdownLabel' >
        <label htmlFor="">{label} </label>
        <div className='myInput' style={{display:'block', fontSize:'12px', color:'grey', height: '40px'}}>
          <DropdownListField
            placeholder={placeholder}
            input={input}
            data={categories}
            valueField="value"
            textField="category"
          />
          {touched && ((error && <span>{error}</span>))}
        </div>
      </div>
    )
  }


  const renderTextArea = ({autoFocus,placeholder,input,type,label,meta:{touched,error}}) => {
  return(
      <div>
        <label>{label} *</label>
        <textarea {...input} type={type} className='textBox' placeholder={placeholder} autoFocus={autoFocus} rows="10" cols="50" />
        {touched && 
        ((error && <div style={{color:"red"}}>{error}</div>))}
      </div>
  )
 }

    return (
      <form onSubmit={props.handleSubmit} className="ContactForm">
        <Field type="text" component={renderField} label="Name" name="name" tabIndex="1" autoFocus />
        <Field type="text" component={renderField} label="Mobile" name="mobile" tabIndex="2"/>
        <Field type="text" component={renderField} label="Email" name="email" tabIndex="3"/>
        <Field type="date" component={renderField} label="What date is your event?" name="eventDate" tabIndex="4" /> 
        <Field
          name="serviceType"
          component={renderDropdownListField}
          data={categories}
          valueField="value"
          textField="category" 
          label=" What type of service would you like to book?"
          tabIndex="5"
        />
         <Field type="number" component={renderField} label="Note: all bookings under 3 people will be held at my private studio in Melbourne. Please specify below, how many people require makeup service and hair and makeup below:" name="totalPeopleJustMakeup" tabIndex="6" placeholder="MAKEUP ONLY" /> 
         <Field type="number" component={renderField} label="How many people will require Hair and Makeup?" name="totalPeopleWithHair" tabIndex="7" placeholder="HAIR AND MAKEUP"/>
         <Field type="text" component={renderField} label="What time do you need to be ready by?" name="timeToFinish" tabIndex="8"/>
         
         <Field type="text" component={renderField} label="If you have booked for 3 or more people, please enter your address below so that I can come to you:" name="applicationAddress" placeholder="PLEASE ENTER YOUR LOCATION ADDRESS" tabIndex="9" number1={props.number1} number2={props.number2} />

         <Field type="text" component={renderField} label="How did you hear about me?" name="howDidYouHear" tabIndex="10" />
         <div id="textBox">
          <Field type="text" component={renderTextArea} label="Any additional information or questions?" name="addedQuestionsOrInfo" tabIndex="11" />
         </div>
        <div style={{marginRight:20}}>
          <button type="submit" className="contactFormSubmit btn">Send Enquiry</button>
          <button disabled={props.pristine||props.submitting} onClick={props.reset} className="contactFormReset">Reset Form</button> 
        </div>
      </form>
  ) 
}

ContactForm = reduxForm({
   form: 'ContactForm',
   validate
 })(ContactForm)
 
 
 const selector = formValueSelector('ContactForm')
 ContactForm = connect(
   state => {
      return {
         number1: selector(state, 'totalPeopleJustMakeup'),
         number2: selector(state, 'totalPeopleWithHair'),
       }
   }
 )(ContactForm)

 export default ContactForm