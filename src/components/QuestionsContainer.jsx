import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import './QuestionsContainer.css'

function QuestionsContainer() {
  const questionsData = useSelector((state) => state.questionsReducer.questionsData);

  return (
    <section className="QuestionsContainer">
      {
        questionsData ?
        questionsData.map((question, index) => {
          return (
            <Question
              key={index}
              {...question}
            />
          )
        }) :
        null
      }
    </section>
  )
}

export default QuestionsContainer
