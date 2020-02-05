import React from 'react';
import {Link} from 'react-router-dom'
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import './FaqPage.scss';

function FaqPage() {
  return (
    <div className="FaqPage" data-testid="FaqPage">
      <div  className="FaqText">
        <h1>FAQ</h1>
        <p>Here you will find answers to the questions i get asked most.</p>
      </div>
      <div>
        <QuestionsContainer/>
      </div>    
      <p>If you have any questions, please contact me using below link.<br/><Link to="/contact" style={{textDecoration:"underline"}}>Contact Me</Link></p> 
    </div>
  );
}

export default FaqPage;
