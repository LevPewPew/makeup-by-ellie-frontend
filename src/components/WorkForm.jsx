import React from 'react';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from './AttachmentField';
import DropdownListField from './DropdownListField';

const categories = [ { category: 'Bridal', value: 'bridal' },
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' } ]

function WorkForm(props) {
  const { handleSubmit, pristine, submitting, success } = props;

  return (
    <form className="WorkForm" onSubmit={handleSubmit}>
      <div>
        <label>Category</label>
        <Field
          name="category"
          component={DropdownListField}
          data={categories}
          valueField="value"
          textField="category"
        />
      </div>
      <div>
        <label>Image</label>
        <Field
          name="imageBlob"
          component={AttachmentField}
        />
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