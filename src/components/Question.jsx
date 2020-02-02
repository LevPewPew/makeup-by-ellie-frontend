import React from 'react';
import { useSelector } from 'react-redux';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import CrudBtnsContainer from '../components/CrudBtnsContainer/CrudBtnsContainer';
import { questionsSubmitHandler } from '../utils/forms/submitHandlers';
import './Question.css';

function Question(props) {
  const { id, question, answer } = props;
  
  const questionForm = useSelector((state) => state.form.QuestionForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);
  
  const collection = 'questions';
  const existingData = {
    question,
    answer
  };

  function handleSubmit() {
    questionsSubmitHandler(questionForm.values, editingForm);
  }

  return (
    <article className="Question">
      {
        editingForm === id ?
        <QuestionForm
          initialValues={existingData}
          onSubmit={handleSubmit}
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
  );
}

export default Question;
