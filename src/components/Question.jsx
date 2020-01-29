import React from 'react';
import BtnDeleteDoc from './BtnDeleteDoc';
import './Question.css';

function Question(props) {
  // Using token stored in localstorage to verify admin user
  const token = localStorage.getItem('token');
  const { id, question, answer } = props;
  const collection = 'FAQ';

  return (
    <article className="Question">
      <h1>Question:{question}</h1>
      <h2>Answer:{answer}</h2>
      {
        token ?
        <div className="crud-per-doc">
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
