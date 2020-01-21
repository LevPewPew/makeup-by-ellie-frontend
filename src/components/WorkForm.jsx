import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from './AttachmentField';
import DropdownListField from './DropdownListField';

function validate(values) {
  let errors = {};

  if (!values.category) {
    errors.category = 'Required';
  }

  if (!values.imageBlob) {
    errors.imageBlob = 'Required';
  }

  return errors;
}

const categories = [ { category: 'Bridal', value: 'bridal' },
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' } ]

function WorkForm(props) {
  const { handleSubmit, pristine, submitting, success } = props;
  const [files, setFiles] = useState([]);

  function renderDropdownListField({input, label, meta: {touched, error, warning}}) {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <div>
          <DropdownListField
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

  function renderAttachmentField({input, label, meta: {touched, error, warning}}) {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <div>
          <AttachmentField
            input={input}
            files={files}
            setFiles={setFiles}
          />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <form className="WorkForm" onSubmit={handleSubmit}>
      <div>
        <label>Category</label>
        <Field
          name="category"
          component={renderDropdownListField}
        />
      </div>
      <div>
        <label>Image</label>
        <Field
          name="imageBlob"
          component={renderAttachmentField}
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

export default reduxForm({form: 'WorkForm', validate})(WorkForm);