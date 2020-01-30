import React from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import BtnSubmit from '../BtnSubmit/BtnSubmit';

function validate(values)
{
  let errors = {};
  
  if(!values.question) {
    errors.question='This is a required field'
  }

  if(!values.answer) {
    errors.answer='This is a required field'
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
  )
}

function QuestionForm(props) {
  const { handleSubmit, pristine, valid, submitting } = props;

  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);

  const text = editingForm ? 'Edit Question' : 'Add Question';

  return (
    <form onSubmit={handleSubmit} className="QuestionForm">
      <Field type="text" component={renderField} label="Question" name="question" />
      <Field type="text" component={renderField} label="Answer" name="answer" />
      <BtnSubmit
        pristine={pristine}
        valid={valid}
        submitting={submitting}
        text={text}
      />
    </form>
  )
}

export default reduxForm({ form: 'QuestionForm', validate })(QuestionForm);
