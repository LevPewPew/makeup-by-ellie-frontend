import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FieldLabel from '../FieldLabel/FieldLabel';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './QuestionForm.scss';

function validate(values) {
  let errors = {};
  
  if (!values.question) {
    errors.question = "Question: (Required)";
  }

  if (!values.answer) {
    errors.answer = "Answer: (Required)";
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

function QuestionForm(props) {
  const { handleSubmit, pristine, submitting } = props;

  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const btnText = editingForm ? "Edit Question" : "Add Question";

  return (
    <form className="QuestionForm form" onSubmit={handleSubmit}>
      {
        editingForm ?
        <h2>Edit this Question and Answer</h2> :
        <h2>Add a Question and Answer</h2>
      }
      <Field
        type="text"
        component={renderField}
        label="Question"
        name="question"
        tabIndex="1"
      />
      <Field
        type="text"
        component={renderTextArea}
        label="Answer"
        name="answer"
        tabIndex="2"
      />
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

export default reduxForm({ form: 'QuestionForm', validate })(QuestionForm);
