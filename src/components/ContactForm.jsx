import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import DropdownListField from './DropdownListField';
import './ContactForm.css';

const categories = [
  { category: 'Bridal', value: 'bridal' },
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' }
];

function validate(values)
{
   let errors = {};
   // Sample validation added - Need to add more later
   if(!values.name)
   {
      errors.name='This is a required field'
   }

   return errors;
}

function warn(values)
{
   let warnings = {};
   // Sample warnings - Need to add more later
   if(!values.mobile)
   {
      warnings.mobile='You have not provided your phone number'
   }
   return warnings;
}

class ContactForm extends React.Component {
   
   renderField = ({autoFocus,placeholder,input,type,label,meta:{touched,error,warning}}) => {
      return(
         <div>
            <label>{label} *</label>
            <input {...input} type={type} className='myInput' placeholder={placeholder} autoFocus={autoFocus}/>
            {touched && 
            ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
         </div>
      )
   }

   renderDropdownListField({placeholder,input, label, meta: {touched, error, warning}}) {
      return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <label htmlFor="">{label}: </label>
          <div className='myInput'>
            <DropdownListField
              placeholder={placeholder}
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

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="ContactForm">
        <Field type="text" component={this.renderField} label="Name" name="name" placeholder=" NAME" tabIndex="1" autoFocus />
        <Field type="text" component={this.renderField} label="Mobile" name="mobile" placeholder=" MOBILE" tabIndex="2"/>
        <Field type="text" component={this.renderField} label="Email" name="email" placeholder=" EMAIL" tabIndex="3"/>
        <Field type="date" component={this.renderField} label="Event Date" name="eventDate" /> 
        <Field
          name="serviceType"
          component={this.renderDropdownListField}
          data={categories}
          valueField="value"
          textField="category" 
          label="Type of Service"
          placeholder=" WHAT TYPE OF SERVICE DO YOU WISH TO BOOK?"
          tabIndex="5"
        />
         <Field type="number" component={this.renderField} label="Number of people for makeup" name="totalPeopleJustMakeup" placeholder=" HOW MANY PEOPLE WILL REQUIRE MAKE UP?" tabIndex="6" /> 
         <Field type="number" component={this.renderField} label="Number of people for Hair" name="totalPeopleWithHair" placeholder=" HOW MANY WILL REQUIRE HAIR STYLING?" tabIndex="7"/>
         <Field type="text" component={this.renderField} label="Time to be ready by" name="timeToFinish" placeholder=" WHAT TIME DO YOU NEED TO BE READY BY?" tabIndex="8"/>
         {(parseInt(this.props.number1)+parseInt(this.props.number2))>3
         && <Field type="text" component={this.renderField} label="Address" name="applicationAddress" placeholder=" AS YOU'RE BOOKING AN ON-LOCATION SERVICE, PLEASE PROVIDE YOUR ADDRESS" tabIndex="9" />}
         <Field type="text" component={this.renderField} label="How did you hear about us" name="howDidYouHear" placeholder=" HOW DID YOU HEAR ABOUT ME?" tabIndex="10" />
         <Field type="textarea" component={this.renderField} label="Any additional questions" name="addedQuestionsOrInfo" placeholder=" PLEASE LET ME KNOW IF YOU HAVE ANY QUESTIONS OR WOULD LIKE TO PROVIDE ADDITIONAL INFORMATION" tabIndex="11" />
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