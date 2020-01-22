import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Question from './Question';
import './QuestionsContainer.css'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function QuestionContainer() {

  const initialState = []
  const [questionList,setQuestionList] = useState(initialState);

  useEffect(() => {
    axios.get(`${backendUrl}/faq`)
    .then(response => {
      setQuestionList(response.data)
    })
  },[])

  
  return (
    <div>
      {questionList.map((question,index)=> {
        return <div ><Question key={index} {...question}/></div>
      })}
    </div>
  )
}

export default QuestionContainer
