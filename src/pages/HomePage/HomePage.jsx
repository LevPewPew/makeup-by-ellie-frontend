import React, { useState } from 'react';
import VizSens from 'react-visibility-sensor';
import mainImg from '../../media/IMG_2412croppedmore.jpeg';
import eventImg from '../../media/home-event2.jpeg';
import editorialImg from '../../media/home-editorial.jpeg';
import bridalImg from '../../media/home-bridal.jpeg';
import './HomePage.scss';
import { useEffect } from 'react';

function HomePage() {
  return (
    <div className="HomePage" data-testid="HomePage">
      <div className="main-img-container">
        <img className="main-img" src={mainImg} alt="woman with makeup"/>
      </div>
      <section className="summaries">
        <article className={`summary-img-text-container ${isVisible ? "fade-in-slide-in-anim" : null}`}>
          <div className="summary-img-container">
            <img className="summary-img" src={eventImg} alt="woman with makeup"/>
          </div>
          <h1>EVENTS &#38; SPECIAL OCCASIONS</h1>
        </article>
        // TODO LEFT OFF give these other articles VizSens too, and fix so that they start off invisible isntead of viz >inviz > viz
        <VizSens>
          {({isVisible}) =>
            <article className={`summary-img-text-container ${isVisible ? "fade-in-slide-in-anim" : null}`}>
              <h1>EDITORIAL</h1>
              <div className="summary-img-container">
                <img className="summary-img" src={editorialImg} alt="woman with makeup"/>
              </div>
            </article>
          }
        </VizSens>
        <article className={`summary-img-text-container ${isVisible ? "fade-in-slide-in-anim" : null}`}>
          <div className="summary-img-container">
            <img className="summary-img" src={bridalImg} alt="woman with makeup"/>
          </div>
          <h1>BRIDAL</h1>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
