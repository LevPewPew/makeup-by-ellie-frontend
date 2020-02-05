import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField/AttachmentField';
import DropdownListField from '../DropdownListField/DropdownListField';
import FieldLabel from '../FieldLabel/FieldLabel';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './WorkForm.scss';

function validate(values) {
  let errors = {};

  if (!values.category) {
    errors.category = 'Category: (Required)';
  }

  if (!values.imageBlob) {
    errors.imageBlob = 'Image: (Required)';
  }

  return errors;
}

const categories = [
  { category: 'Beauty', value: 'beauty' },
  { category: 'Editorial', value: 'editorial' },
  { category: 'Bridal', value: 'bridal' }
]

function renderDropdownListField ({ placeholder, input, label, meta: { touched, error } }) {
  return (
    <div className="dropdown-list-field">
      <FieldLabel
        touched={touched}
        label={label}
        error={error}
      />
      <div>
        <DropdownListField
          placeholder={placeholder}
          input={input}
          data={categories}
          valueField="value"
          textField="category"
        />
      </div>
    </div>
  );
}

function WorkForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  
  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  // this state is needed outside of the AttachmentField to avoid component unmounted errors from react-dropzone when using redux-form validations, do not move into AttachmentField
  const [files, setFiles] = useState([]);

  const btnText = editingForm ? 'Edit Photo' : 'Add Photo';

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
    <form className="WorkForm" onSubmit={handleSubmit}>
      {
        editingForm ?
        <h2>Edit this Work</h2> :
        <h2>Add a Work</h2>
      }
      <Field
        name="category"
        component={renderDropdownListField}
        data={categories}
        valueField="value"
        textField="category" 
        label="Category:"
        tabIndex="1"
      />
      {
        editingForm ?
        null :
        <Field
          name="imageBlobs"
          component={renderAttachmentField}
          label="Image/s:"
          tabIndex="2"
        />
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

export default reduxForm({ form: 'WorkForm', validate })(WorkForm);
