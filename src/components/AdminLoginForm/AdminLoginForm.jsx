import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './AdminLoginForm.scss';

function validate(values) {
  let errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }

  return errors;
}

function warn(values) {
  let warnings = {};

  if (!values.password) {
    warnings.password = 'Required';
  }

  return warnings;
}

const renderField = ({ input, type, label, meta: { touched, error, warning } }) => {
  return (
    <div className="text-field">
      <label>{label}:</label>
      <input {...input} type={type} className='myInput' />
      {
        touched &&
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
        (warning && <span style={{ color:"orange" }}>{warning}</span>))
      }
    </div>
  );
}

function AdminLoginForm(props) {
  return (
    <form className="AdminLoginForm" onSubmit={props.handleSubmit}>
      <Field type="text" component={renderField} label="Username" name="username" />
      <Field type="password" component={renderField} label="Password" name="password" />
      <button className="btn" type="submit">Login</button>
    </form>
  );
}

AdminLoginForm = reduxForm({
  form: 'AdminLoginForm', validate, warn
})(AdminLoginForm);
 
export default AdminLoginForm;
