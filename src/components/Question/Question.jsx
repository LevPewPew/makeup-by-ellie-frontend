import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import QuestionForm from '../QuestionForm/QuestionForm';
import CrudBtnsContainer from '../CrudBtnsContainer/CrudBtnsContainer';
import { questionsSubmitHandler } from '../../utils/forms/submitHandlers';
import './Question.scss';

function Question(props) {
  const { id, question, answer } = props;
  const [showAnswer,setShowAnswer] = useState(false);
  
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

  const handleClick = (e) => {
    setShowAnswer(!showAnswer)
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
        <div className="ShowQuestion">
          <button className="ShowAnswer" onClick={handleClick}>{showAnswer?"-":"+"}</button><h2>Question:{question}</h2>
        </div>
          {showAnswer?<h3>Answer:{answer}</h3>:null}     
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
