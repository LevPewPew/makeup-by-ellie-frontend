import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../Question/Question';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './QuestionsContainer.scss';

function QuestionsContainer() {
  const questionsData = useSelector((state) => state.questionsReducer.questionsData);

  return (
    <section className="QuestionsContainer">
      {
        questionsData.length > 0 ?
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
        <LoadingAnimation />
      }
    </section>
  );
}

export default QuestionsContainer;
