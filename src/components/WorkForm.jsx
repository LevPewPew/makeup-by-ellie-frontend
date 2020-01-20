import React from 'react';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from './AttachmentField';

function WorkForm(props) {
  const { handleSubmit, pristine, submitting, success } = props;

  return (
    <form className="WorkForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <div>
        <Field name="imageBlob" component={AttachmentField} />
      </div>
      {
        success ?
        <div>
          {'File Uploaded!'}
        </div> :
        null
      }
      <button type="submit" disabled={submitting || pristine}>Submit</button>
    </form>
  )
}

export default reduxForm({form: 'WorkForm'})(WorkForm);