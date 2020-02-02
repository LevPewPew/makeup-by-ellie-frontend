import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField/AttachmentField';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './ServiceForm.scss';

function validate(values) {
  let errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.imageBlob) {
    errors.imageBlob = "Required";
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
  );
}

function ServiceForm(props) {
  const { handleSubmit, pristine, submitting } = props;

  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  // this state is needed outside of the AttachmentField to avoid component unmounted errors from react-dropzone when using redux-form validations, do not move into AttachmentField
  const [files, setFiles] = useState([]);

  const btnText = editingForm ? 'Edit Service' : 'Add Service';

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
          {
            touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))
          }
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (successfulSubmit) {
      setFiles([]);
    }

    // Make sure to revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // DO NOT add the files dependency, even though react warning appears, if you add it then you can create infinite loops and crash the browser
  }, [successfulSubmit]);

  return (
    <form className="ServiceForm form" onSubmit={handleSubmit}>
      <Field type="text" component={renderField} label="Title" name="title" />
      <Field type="text" component={renderField} label="Description" name="description" />
      {
        editingForm ?
        null :
        <div>
          <label>Image</label>
          <Field
            name="imageBlobs"
            component={renderAttachmentField}
          />
        </div>
      }
      <BtnSubmit
        pristine={pristine}
        submitting={submitting}
        text={btnText}
      />
      <BtnCancelForm />
    </form>
  );
}

export default reduxForm({ form: 'ServiceForm', validate })(ServiceForm);
