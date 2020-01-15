import React from 'react';
import { Field, reduxForm } from 'redux-form';

function WorkForm() {
  return (
    <form className="WorkForm" onSubmit={this.props.handleSubmit}>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <div>
        {/* TODO change this to attachment, refer to class cafe app */}
        <label htmlFor="image">Image</label>
        <Field name="image" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

// TODO once i pull accepted redux store boilerplate, i can change root reducer to be the store also and mimic the my-first-form repo setup

export default reduxForm({form: 'WorkForm'})(WorkForm);