import React from "react";
// import mainImg from "../../media/ellie.jpeg";
import "./AboutMePage.scss";

function AboutMePage() {
  return (
    <div className="AboutMePage" data-testid="AboutMePage">
      <h1>ABOUT</h1>
      <div className="about-main-img-container">
        {/* add photo back in if ellie ever finds one that she likes */}
        {/* <div className="main-img-container">
          <img className="main-img" src={mainImg} alt="woman with makeup" />
        </div> */}
        <section className="about">
          <p>
            Soon after completing a hairdressing course, Ellie became interested
            in the creativity and freedom within makeup. She decided to embrace
            the world of makeup and completed a specialist makeup course in
            2011.
          </p>
          <p>
            Always looking to grow and learn as an artist, she began to attend
            many workshops hosted by other inspiring artists such as Rae Morris
            and Mia Conner.
          </p>
          <p>
            Ellie began her career with Mecca brands in 2016. Working with Mecca
            has given her the experience to work with a variety of people. She
            has learned to understand different skin concerns and conditions,
            knowing what products will work best for your individual needs.
            Ellie is comfortable and confident applying makeup on all
            complexions.
          </p>
          <p>
            Through Mecca, Ellie also had the opportunity to further her
            education and upskill by attending workshops with many international
            makeup artists and brand ambassadors. This has allowed her to keep
            up with current trends and new products. These workshops have given
            her tips and tricks which she now uses and applies to her everyday
            artistry.
          </p>
          <p>
            Fashion and beauty have always been an interest. Ellie has had the
            pleasure to work with amazing artistry teams for runway shows
            including Fred Hates Fashion, Melbourne Fashion Week and The Global
            Indigenous Runway, as well as working as an artist backstage at
            Meccaland.
          </p>
          <p>
            Ellie has specialised in bridal for the last 6 years and enjoys
            helping brides feel like the best version of themselves on their
            special day, she is well known for her great attention to detail.
            Enhancing your natural beauty is always her goal.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMePage;
