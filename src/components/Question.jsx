import React from 'react';
import { useSelector } from 'react-redux';
import BtnDeleteDoc from './BtnDeleteDoc';
import './Question.css';

function Question(props) {
  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const { id, question, answer } = props;
  const collection = 'FAQ';

  return (
    <article className="Question">
      <h1>Question:{question}</h1>
      <h2>Answer:{answer}</h2>
      {
        onAdminDash ?
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
