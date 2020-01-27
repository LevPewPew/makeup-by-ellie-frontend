import React from 'react';
import './Question.css';

function Question(props) {

  return (
    <article className="Question">
      <h1>Question:{props.question}</h1>
      <h2>Answer:{props.answer}</h2>
    </article>
  )
}

export default Question
