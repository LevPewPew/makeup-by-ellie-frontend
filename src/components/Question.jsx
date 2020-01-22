import React from 'react';
import './Question.css';

function Question(props) {

  return (
    <div className="Question">
      <h1>Question:{props.question}</h1>
      <h2>Answer:{props.answer}</h2>
    </div>
  )
}

export default Question
