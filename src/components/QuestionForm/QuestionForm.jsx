import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

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
  const { handleSubmit, pristine, submitting } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // if statement here to prevent double HTTP requests
    if (!submitting) {
      (async () => {
        let res = await axios.get(`${backendUrl}/FAQ`);
        dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data })
      })();
    }
  }, [submitting, dispatch]);

  return (
    <form onSubmit={handleSubmit} className="QuestionForm">
      <Field type="text" component={renderField} label="Question" name="question" />
      <Field type="text" component={renderField} label="Answer" name="answer" />
      {/* TODO import BtnSubmit here once it is merged */}
      <button type="submit" disabled={submitting || pristine} style={{margin: '50px', width: '50px', height: '50px'}}>Submit</button>
    </form>
  )
}

export default reduxForm({ form: 'QuestionForm', validate })(QuestionForm);
