import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import DropdownListField from '../DropdownListField/DropdownListField';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import FieldLabel from '../FieldLabel/FieldLabel';
import _ from 'lodash';
import './ContactForm.scss';

const categories = [
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' },
  { category: 'Bridal', value: 'bridal' }
];

function validate(values) {
   let errors = {};

  if (!values.name) {
    errors.name = 'Name: (Required)';
  }

  if (!values.mobile) {
    errors.mobile = 'Mobile: (Required)';
  } 

  if (!values.email) {
    errors.email = 'Email: (Required)';
  } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
    errors.email  =  'Email: (Invalid email address)'
  }

  if (!values.eventDate) {
    errors.eventDate = 'What date do you need your makeup? (Required)';
  } 

  if (!values.serviceType) {
    errors.serviceType = 'What type of service would you like to book? (Required)';
  } 
  
  if (!values.totalPeopleJustMakeup) {
    errors.totalPeopleJustMakeup = 'How many people require only their Makeup done? (Required)';
  }

  if (!values.totalPeopleWithHair) {
    errors.totalPeopleWithHair = 'How many people require both Hair and Makeup? (Required)';
  }

  if (!values.timeToFinish) {
    errors.timeToFinish = 'What time do you need to be ready by? (Required)';
  }

  if (!values.howDidYouHear) {
    errors.howDidYouHear = 'What type of service would you like to book? (Required)';
  }

  return errors;
}

const peopleNumLimit = (value) => {
  if (value < 0) {
    return 0
  } else if (value > 10) {
    return 10
  } else {
    return value
  }
}

const renderField = ({ autoFocus, placeholder, input, type, label, number1, number2, meta: { touched, error } }) => {
  if (input.name === 'applicationAddress') {
    return (
      <div className="text-field">
        <FieldLabel
          touched={touched}
          label={label}
          error={error}
        />
        <input {...input} type={type} placeholder={placeholder} autoFocus={autoFocus} disabled={(parseInt(number1) + parseInt(number2)) > 2 ? false : true }/>
        {touched && 
        ((error && <div style={{ color: "red" }}>{error}</div>))}
      </div>
    )
  } else {
    return (
      <div className="text-field">
        <FieldLabel
          touched={touched}
          label={label}
          error={error}
        />
        <input {...input} type={type} placeholder={placeholder} autoFocus={autoFocus}/>
      </div>
    )
  }
}

const renderDropdownListField = ({ placeholder, input, label, meta: { touched, error } }) => {
  return (
    <div className="dropdown-list-field">
      <FieldLabel
        touched={touched}
        label={label}
        error={error}
      />
      <div style={{ display: "block", fontSize: "12px", color: "grey", height: "40px" }}>
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

const renderTextArea = ({ autoFocus, placeholder, input, type, label, meta: { touched, error } }) => {
  return (
    <div className="text-area-field">
      <FieldLabel
        touched={touched}
        label={label}
        error={error}
      />
      <textarea {...input} type={type} className="textBox" placeholder={placeholder} autoFocus={autoFocus} rows="10" cols="50" />
      {touched && 
      ((error && <div style={{ color: "red" }}>{error}</div>))}
    </div>
  )
}

function ContactForm(props) {
  const { handleSubmit, pristine, submitting, reset } = props;

  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const btnText = editingForm ? "Edit Contact Info" : "Send";

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <Field
        type="text"
        component={renderField}
        label="Name:"
        name="name"
        tabIndex="1"
        autoFocus
      />
      <Field
        type="text"
        component={renderField}
        label="Mobile:"
        name="mobile"
        tabIndex="2"
      />
      <Field
        type="text"
        component={renderField}
        label="Email:"
        name="email"
        tabIndex="3"
      />
      <Field
        type="date"
        component={renderField}
        label="What date do you need your makeup?"
        name="eventDate"
        tabIndex="4"
      /> 
      <Field
        name="serviceType"
        component={renderDropdownListField}
        data={categories}
        valueField="value"
        textField="category" 
        label="What type of service would you like to book?"
        tabIndex="5"
      />
      <p>
        Note: All bookings for less than 3 people in total can only be held at my private studio in Altona Meadows. When a booking is made for 3 or more people total I will travel to your specified address.
      </p>
      <Field
        type="number"
        component={renderField}
        label="How many people require only their Makeup done (up to 10)?"
        name="totalPeopleJustMakeup"
        tabIndex="6"
        placeholder="ONLY Makeup"
        normalize={peopleNumLimit}
      /> 
      <Field
        type="number"
        component={renderField}
        label="How many people require both Hair and Makeup (up to 10)?"
        name="totalPeopleWithHair"
        tabIndex="7"
        placeholder="Hair AND Makeup"
        normalize={peopleNumLimit}
      />
      <Field
        type="text"
        component={renderField}
        label="What time do you need to be ready by?"
        name="timeToFinish"
        tabIndex="8"
      />
      <Field
        type="text"
        component={renderField}
        //TODO redo this place holder etc
        label="If you have booked for 3 or more people, please enter your address below so that I can come to you:"
        name="applicationAddress"
        placeholder="PLEASE ENTER YOUR LOCATION ADDRESS"
        number1={props.number1}
        number2={props.number2}
        tabIndex="9"
      />
      <Field
        type="text"
        component={renderField}
        label="How did you hear about me?"
        name="howDidYouHear"
        tabIndex="10"
      />
      <div id="textBox">
        <Field
          type="text"
          component={renderTextArea}
          label="Any additional information or questions?"
          name="addedQuestionsOrInfo"
          tabIndex="11"
        />
      </div>
      <div style={{ marginRight: 20 }}>
        {/* <button className="contactFormSubmit btn" type="submit">Send Enquiry</button> */}
        <BtnSubmit
          pristine={pristine}
          submitting={submitting}
          text={btnText}
        />
        <button className="reset-btn btn" disabled={pristine || submitting} onClick={reset}>Reset Form</button> 
      </div>
    </form>
  ) 
}

ContactForm = reduxForm({
   form: 'ContactForm',
   validate
 })(ContactForm);
 
 const selector = formValueSelector('ContactForm')
 ContactForm = connect(
   state => {
      return {
         number1: selector(state, 'totalPeopleJustMakeup'),
         number2: selector(state, 'totalPeopleWithHair'),
       }
   }
 )(ContactForm);

 export default ContactForm;
