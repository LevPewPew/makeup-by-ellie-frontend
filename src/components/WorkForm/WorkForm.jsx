import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField';
import DropdownListField from '../DropdownListField';
import './WorkForm.css';
import BtnSubmit from '../BtnSubmit/BtnSubmit';

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

const categories = [
  { category: 'Bridal', value: 'bridal' },
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' }
]

function WorkForm(props) {
  const { handleSubmit, pristine, submitting, success, setSuccess } = props;
  // this state is needed outside of the AttachmentField to avoid component unmounted errors from react-dropzone when using redux-form validations, do not move into AttachmentField
  const [files, setFiles] = useState([]);

  function renderDropdownListField({ input, label, meta: { touched, error, warning } }) {
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

  function renderAttachmentField({ input, label, meta: { touched, error, warning } }) {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <div>
          <AttachmentField
            input={input}
            files={files}
            setFiles={setFiles}
            success={success}
            setSuccess={setSuccess}
          />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (success) {
      setFiles([]);
    }
    // Make sure to revoke the data uris to avoid memory leaks
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    }
  // react warning asks to put files as a dependency, but this results in the app and browser crashing, so for now ignore that warning. only add files as dependency if a refactoring of files and this useEffect is somehow achieved.
  }, [success]);

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
          name="imageBlobs"
          component={renderAttachmentField}
        />
      </div>
      <BtnSubmit
        pristine={pristine}
        submitting={submitting}
        text={'Add Photo'}
      />
    </form>
  )
}

export default reduxForm({ form: 'WorkForm', validate })(WorkForm);