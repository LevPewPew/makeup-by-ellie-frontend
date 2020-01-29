import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import BtnEditDoc from './BtnEditDoc';
import BtnDeleteDoc from './BtnDeleteDoc';
import './Question.css';

function Question(props) {
  // Using token stored in localstorage to verify admin user
  const token = localStorage.getItem('token');
  const { id, question, answer } = props;
  const [editing, setEditing] = useState(false);
  const collection = 'questions';

  return (
    <article className="Question">
      {
        editing ?
        <QuestionForm
          editing={editing}
        /> :
        <div className="qna">
          <h2>Question:{question}</h2>
          <h3>Answer:{answer}</h3>
        </div>
      }
      {
        token ?
        <div className="crud-per-doc">
          <BtnEditDoc
            collection={collection}
            id={id}
            editing={editing}
            setEditing={setEditing}
          />
          <BtnDeleteDoc
            collection={collection}
            id={id}
          />
        </div> :
        null
      }
    </article>
  )
}

export default Question
