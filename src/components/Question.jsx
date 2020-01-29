import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm/QuestionForm';
import CrudBtnsContainer from '../components/CrudBtnsContainer/CrudBtnsContainer';
import './Question.css';

function Question(props) {
  const { id, question, answer } = props;
  const [ editing, setEditing ] = useState(false);
  const collection = 'questions';
  const existingData = {
    question,
    answer
  }

  return (
    <article className="Question">
      {
        editing ?
        <QuestionForm
          editing={editing}
          initialValues={existingData}
        /> :
        <div className="qna">
          <h2>Question:{question}</h2>
          <h3>Answer:{answer}</h3>
          <CrudBtnsContainer
            collection={collection}
            id={id}
            editing={editing}
            setEditing={setEditing}
          />
        </div>
        // {
        //   token ?
        //   <div className="crud-per-doc">
        //     <BtnEditDoc
        //       collection={collection}
        //       id={id}
        //       editing={editing}
        //       setEditing={setEditing}
        //     />
        //     <BtnDeleteDoc
        //       collection={collection}
        //       id={id}
        //     />
        //   </div> :
        //   null
        // }
      }
    </article>
  )
}

export default Question
