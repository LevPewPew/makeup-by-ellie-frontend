import React from 'react';
import QuestionsContainer from '../../components/QuestionsContainer';
import './FaqPage.css'

function FaqPage() {
  return (
    <div className="FaqPage" data-testid="FaqPage">
      <h1>FAQ</h1>
      <QuestionsContainer/>
    </div>
  )
}

export default FaqPage;
