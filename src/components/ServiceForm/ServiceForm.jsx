import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField';
import './ServiceForm.css';
import BtnSubmit from '../BtnSubmit/BtnSubmit';

function validate(values) {
  let errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.imageBlob) {
    errors.imageBlob = 'Required';
  }

  return errors;
}

function renderField({ input, type, label, meta: { touched, error, warning } }) {
  return (
    <div>
      <label>{label}: </label>
      <input {...input} type={type} />
      {touched && 
      ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
    </div>
  )
}

function ServiceForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const [files, setFiles] = useState([]);

  function renderAttachmentField({ input, label, meta: { touched, error, warning } }) {
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
    if (successfulSubmit) {
      setFiles([]);
    }
    // Make sure to revoke the data uris to avoid memory leaks
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    }
  // react warning asks to put files as a dependency, but this results in the app and browser crashing, so for now ignore that warning. only add files as dependency if a refactoring of files and this useEffect is somehow achieved.
  }, [files, successfulSubmit]);

  return (
    <form className="ServiceForm" onSubmit={handleSubmit}>
      <Field type="text" component={renderField} label="Title" name="title" />
      <Field type="text" component={renderField} label="Description" name="description" />
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

export default reduxForm({ form: 'ServiceForm', validate })(ServiceForm);