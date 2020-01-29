import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import './QuestionsContainer.css'
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function QuestionsContainer() {
  const questionsData = useSelector((state) => state.questionsReducer.questionsData);
  const successfulSubmit = useSelector((state) => state.adminDashReducer.successfulSubmit);
  const dispatch = useDispatch();

  useEffect(() => {
    async function refreshData() {
      if (successfulSubmit) {
        let res = await axios.get(`${backendUrl}/FAQ`);
        dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
        dispatch({ type: 'NO_SUCCESSFUL_SUBMIT' });
      }
    }

    refreshData();
  }, [successfulSubmit, dispatch]);

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
  )
}

export default QuestionsContainer
