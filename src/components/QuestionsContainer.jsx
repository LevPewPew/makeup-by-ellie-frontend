import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import './QuestionsContainer.css';

function QuestionsContainer() {
  const questionsData = useSelector((state) => state.questionsReducer.questionsData);

  return (
    <section className="QuestionsContainer">
      {
        questionsData ?
        questionsData.map((qna, index) => {
          const { _id, question, answer } = qna;

          return (
            <Question
              key={index}
              id={_id}
              question={question}
              answer={answer}
            />
          )
        }) :
        null
      }
    </section>
  );
}

export default QuestionsContainer;
