import React from 'react';
import heroImage from '../../media/homepage-hero.jpeg';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="HomePage" data-testid="HomePage">
      <img className="hero-banner" src={heroImage} alt="hero banner"/>
      <section className="about">
        <h1>ABOUT</h1>
        <p>
          I first started makeup in 2011 after completing a hairdressing course I was naturally drawn to makeup as the pair work hand in hand. Once I started my diploma of specialist makeup services I knew that makeup was my true calling. Makeup became the perfect medium for my creativity and I quickly adapted to techniques to me.
        </p>
        <p>
          Continuing my education has always been important to me. To further my education I attended workshops hosted by other inspiring artists such as Rae Morris and Mia Conner.
        </p>
        <p>
          In 2016 I began my career with Mecca brands working at Mecca has given me the experience to work with many different skin types from fair to darker complexions, young skin to mature skin. I have learned to understand different skin concerns and conditions, and what products work best for different people. Through Mecca I have also had the opportunity to further my education by attending workshops with many international makeup artist such as:
          <br />
          <br />- Rae Morris
          <br />- Mia Conner
          <br />- Lena Koro, Jane Richardson from Nars
          <br />- Lancômes, Lara Srokowski
          <br />- Too faced Pro Artist Elyse Rebeau
          <br />- Urban Decay Global artist Steve Kassajikian
          <br />- Global Mac senior artist Nicole Thompson
          <br />- Global beauty director Laura Mercier Jason Hoffman
          <br />
          <br />
          These workshops have given me tips and tricks which I now use and apply to my everyday artistry.
          In 2018 I won a Mecca x Smashbox artistry competition which took me to L.A to shoot online content for Mecca using the Smashbox cover shot palettes.
        </p>
        <p>
          Fashion and beauty have always been an interest and I have had the pleasure to work with amazing teams for runway shows including
          Fred hates fashion
          Melbourne fashion week and
          The Global indigenous runway
          I have also had the opportunity to work as an artist backstage at Meccaland.
        </p>
        <p>
          Understanding facial features and being able to adapt a look you choose to suit your unique features is something I specialise in.
          I’m known for being a perfectionist and this comes with fine attention to detail.
          I believe that over time I have developed a signature style being a flawless radiant base.
          Enhancing your natural beauty is always my goal.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
