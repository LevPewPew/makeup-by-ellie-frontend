import React from 'react';
import { Field, reduxForm } from 'redux-form';

function WorkForm() {
  return (
    <form className="WorkForm" onSubmit={this.props.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({form: 'contact'})(WorkForm);