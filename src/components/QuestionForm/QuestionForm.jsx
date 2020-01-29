import React from 'react';
import { Field, reduxForm } from 'redux-form';
import BtnSubmit from '../BtnSubmit/BtnSubmit';

function validate(values)
{
  let errors = {};
  
  if(!values.question) {
    errors.name='This is a required field'
  }

  if(!values.answer) {
    errors.name='This is a required field'
  }

  return errors;
}

function renderField({ input, type, label, meta: { touched, error, warning } }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && 
      ((error && <div style={{color:"red"}}>{error}</div>)||(warning && <div>{warning}</div>))}
    </div>
  )
}

function QuestionForm(props) {
  const { handleSubmit, pristine, submitting, editing } = props;
  const text = editing ? 'Edit Question' : 'Add Question';

  return (
    <form onSubmit={handleSubmit} className="QuestionForm">
      <Field type="text" component={renderField} label="Question" name="question" />
      <Field type="text" component={renderField} label="Answer" name="answer" />
      <BtnSubmit
        pristine={pristine}
        submitting={submitting}
        text={text}
      />
    </form>
  )
}

export default reduxForm({ form: 'QuestionForm', validate })(QuestionForm);
