import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import BtnCancelForm from '../BtnCancelForm/BtnCancelForm';
import './QuestionForm.scss';

function validate(values) {
  let errors = {};
  
  if (!values.question) {
    errors.question = "Required";
  }

  if (!values.answer) {
    errors.answer = "Required";
  }

  return errors;
}

function renderField({ input, type, label, meta: { touched, error, warning } }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {
        touched &&
        ((error && <span style={{ color:"red" }}>{error}</span>) ||
        (warning && <span style={{ color:"orange" }}>{warning}</span>))
      }
    </div>
  );
}

function QuestionForm(props) {
  const { handleSubmit, pristine, submitting } = props;

  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const btnText = editingForm ? "Edit Question" : "Add Question";

  return (
    <form className="QuestionForm form" onSubmit={handleSubmit} >
      <Field type="text" component={renderField} label="Question" name="question" />
      <Field type="text" component={renderField} label="Answer" name="answer" />
      <BtnSubmit
        pristine={pristine}
        submitting={submitting}
        text={btnText}
      />
      <BtnCancelForm />
    </form>
  );
}

export default reduxForm({ form: 'QuestionForm', validate })(QuestionForm);
