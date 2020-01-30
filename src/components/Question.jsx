import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import CrudBtnsContainer from '../components/CrudBtnsContainer/CrudBtnsContainer';
import axios from 'axios';
// import { handleQuestionsSubmit } from '../utils/forms/submitHandlers'; 
import './Question.css';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Question(props) {
  const { id, question, answer } = props;
  
  const questionForm = useSelector((state) => state.form.QuestionForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);
  const dispatch = useDispatch();
  
  const collection = 'questions';
  const existingData = {
    question,
    answer
  }

  // function handleSubmit() {
  //   handleQuestionsSubmit(questionForm.values, );
  // }

  async function handleQuestionsSubmit() {
    const { question, answer } = questionForm.values;

    let id = editingForm;
    let params = { question, answer };

    try {
      if (editingForm) {
        await axios.put(`${backendUrl}/questions/${id}`, params);
      } else {
        await axios.post(`${backendUrl}/questions`, params);
      }
      let res = await axios.get(`${backendUrl}/questions`);
      dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
      dispatch({ type: 'NOT_EDITING_FORM' });
      dispatch(reset('QuestionForm'));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <article className="Question">
      {
        editingForm === id ?
        <QuestionForm
          initialValues={existingData}
          onSubmit={handleQuestionsSubmit}
        /> :
        <>
          <h2>Question:{question}</h2>
          <h3>Answer:{answer}</h3>
          <CrudBtnsContainer
            collection={collection}
            id={id}
          />
        </>
      }
    </article>
  )
}

export default Question
