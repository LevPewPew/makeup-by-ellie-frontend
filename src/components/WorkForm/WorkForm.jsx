import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import AttachmentField from '../AttachmentField';
import DropdownListField from '../DropdownListField';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './WorkForm.scss';

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
  { category: 'Beauty', value: 'beauty' },
  { category: 'Bridal', value: 'bridal' },
  { category: 'Editorial', value: 'editorial' }
]

function WorkForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
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
          {
            touched &&
            ((error && <span style={{ color:"red" }}>{error}</span>) ||
            (warning && <span style={{ color:"orange" }}>{warning}</span>))
          }
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
          />
          {
            touched &&
            ((error && <span style={{ color:"red" }}>{error}</span>) ||
            (warning && <span style={{ color:"orange" }}>{warning}</span>))
          }
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
    // DO NOT add the files dependency, even though react warning appears, if you add it then you can create infinite loops and crash the browser
  }, [successfulSubmit]);

  return (
    <form className="WorkForm form" onSubmit={handleSubmit}>
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
      <BtnCancelForm />
    </form>
  )
}

export default reduxForm({ form: 'WorkForm', validate })(WorkForm);