import React from 'react';
import { Field, reduxForm } from 'redux-form';

function validate(values)
{
   let errors = {};
   // Sample validation added - Need to add more later
   if(!values.username)
   {
      errors.username='This is a required field'
   }

   return errors;
}

function warn(values)
{
   let warnings = {};
   // Sample warnings - Need to add more later
   if(!values.password)
   {
      warnings.password='You have not provided your password'
   }
   return warnings;
}

class AdminLoginForm extends React.Component {
   
   renderField = ({input,type,label,meta:{touched,error,warning}}) => {
      return(
         <div>
            <label>{label}:</label>
            <input {...input} type={type} className='myInput' />
            {touched && 
            ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
         </div>
      )
   }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="AdminLoginForm">
        <Field type="text" component={this.renderField} label="Username" name="username" />
        <Field type="password" component={this.renderField} label="Password" name="password" />
        <button type="submit">Login</button>
      </form>
  );
  }
  
}

AdminLoginForm = reduxForm({
   form: 'adminlogin',validate,warn
 })(AdminLoginForm)
 


 export default AdminLoginForm