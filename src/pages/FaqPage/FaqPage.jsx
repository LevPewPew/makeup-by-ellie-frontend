import React from 'react';
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import './FaqPage.scss';

function FaqPage() {
  return (
    <div className="FaqPage" data-testid="FaqPage">
      <div className="FaqText">
        <h1>FAQ</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt eaque omnis? Molestias facere magni dicta iste minima, itaque voluptates saepe voluptatibus accusantium, sed, eaque officiis impedit eveniet quasi laboriosam!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt eaque omnis? Molestias facere magni dicta iste minima, itaque voluptates saepe voluptatibus accusantium
        </p>
      </div>
      <div className="FaqContainer">
        <QuestionsContainer/>
      </div>     
    </div>
  );
}

export default FaqPage;
