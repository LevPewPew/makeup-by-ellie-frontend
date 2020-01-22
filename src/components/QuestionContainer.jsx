import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Question from './Question';
import './QuestionContainer.css'

function QuestionContainer() {

  const initialState = []
  const [questionList,setQuestionList] = useState(initialState);

  useEffect(() => {
    axios.get('http://localhost:8000/faq')
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
