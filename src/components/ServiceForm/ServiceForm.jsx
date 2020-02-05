import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField/AttachmentField';
import FieldLabel from '../FieldLabel/FieldLabel';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './ServiceForm.scss';

function validate(values) {
  let errors = {};

  if (!values.title) {
    errors.title = "Title: (Required)";
  }

  if (!values.description) {
    errors.description = "Description: (Required)";
  }

  if (!values.imageBlob) {
    errors.imageBlob = "Image: (Required)";
  }

  return errors;
}

function renderField({ autoFocus, placeholder, input, type, label, meta: { touched, error } }) {
  return (
    <div className="text-field">
      <FieldLabel
        touched={touched}
        label={label}
        error={error}
      />
      <input {...input} type={type} placeholder={placeholder} autoFocus={autoFocus}/>
    </div>
  );
}

function renderTextArea({ autoFocus, placeholder, input, type, label, meta: { touched, error } }) {
  return (
    <div className="text-area-field">
      <FieldLabel
        touched={touched}
        label={label}
        error={error}
      />
      <textarea {...input} type={type} className="textBox" placeholder={placeholder} autoFocus={autoFocus} rows="10" cols="50" />
    </div>
  )
}

function ServiceForm(props) {
  const { handleSubmit, pristine, submitting } = props;

  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  // this state is needed outside of the AttachmentField to avoid component unmounted errors from react-dropzone when using redux-form validations, do not move into AttachmentField
  const [files, setFiles] = useState([]);

  const btnText = editingForm ? 'Edit Service' : 'Add Service';

  // this function is within the component because it needs the files state as a prop
  function renderAttachmentField({ input, label, meta: { touched, error } }) {
    return (
      <div className="dropzone-field">
        <FieldLabel
          touched={touched}
          label={label}
          error={error}
        />
        <div>
          <AttachmentField
            input={input}
            files={files}
            setFiles={setFiles}
          />
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
      {
        editingForm ?
        <h2>Edit this Service</h2> :
        <h2>Add a Service</h2>
      }
      <Field
        type="text"
        component={renderField}
        label="Title:"
        name="title"
        tabIndex="1"
      />
      <Field
        type="text"
        component={renderTextArea}
        label="Description:"
        name="description"
        tabIndex="2"
      />
      <Field
        type="text"
        component={renderField}
        label="Duration:"
        name="duration"
        tabIndex="3"
      />
      <Field
        type="text"
        component={renderField}
        label="Cost:"
        name="cost"
        tabIndex="4"
      />
      <Field
        type="text"
        component={renderTextArea}
        label="Disclaimer:"
        name="disclaimer"
        tabIndex="5"
      />
      {
        editingForm ?
        null :
        <div>
          <Field
            name="imageBlobs"
            component={renderAttachmentField}
            label="Image/s:"
            tabIndex="6"
          />
        </div>
      }
      <div className="admin-form-btn-container">
        <BtnSubmit
          pristine={pristine}
          submitting={submitting}
          text={btnText}
        />
        <BtnCancelForm />
      </div>
    </form>
  );
}

export default reduxForm({ form: 'ServiceForm', validate })(ServiceForm);
