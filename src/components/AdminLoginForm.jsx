import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

class AdminLoginForm extends React.Component {
  renderField = ({ input, type, label, meta: { touched, error, warning } }) => {
    return (
      <div>
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

  render() {
    return (
      <form className="AdminLoginForm" onSubmit={this.props.handleSubmit}>
        <Field type="text" component={this.renderField} label="Username" name="username" />
        <Field type="password" component={this.renderField} label="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

AdminLoginForm = reduxForm({
  form: 'adminlogin', validate, warn
})(AdminLoginForm);
 
 export default AdminLoginForm;
