import React, { useState } from "react";
import VizSens from "react-visibility-sensor";
import BtnBookNow from "../../components/BtnBookNow/BtnBookNow";
import mainImg from "../../media/IMG_2412croppedmore.jpeg";
import eventImg from "../../media/home-event2.jpeg";
import editorialImg from "../../media/home-editorial.jpeg";
import bridalImg from "../../media/home-bridal.jpeg";
import "./HomePage.scss";

function HomePage() {
  const vizOffset = 400;
  // these states is a workaround for react-visibility-sensor bug
  // delayedCall does not actually work, it just stops 1 of 2 calls,
  // and so is useless in this scenario
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [vizzedOnce1, setVizzedOnce1] = useState(false);
  const [vizzedOnce2, setVizzedOnce2] = useState(false);
  const [vizzedOnce3, setVizzedOnce3] = useState(false);

  const disableAnim1 = () => {
    if (!vizzedOnce1) {
      setVizzedOnce1(true);
      return;
    }

    setIsVisible1(true);
  };

  const disableAnim2 = () => {
    if (!vizzedOnce2) {
      setVizzedOnce2(true);
      return;
    }

    setIsVisible2(true);
  };

  const disableAnim3 = () => {
    if (!vizzedOnce3) {
      setVizzedOnce3(true);
      return;
    }

    setIsVisible3(true);
  };

  return (
    <div className="HomePage" data-testid="HomePage">
      <div className="main-img-container">
        <img className="main-img" src={mainImg} alt="woman with makeup" />
      </div>
      <section className="summaries">
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility={"top"}
          onChange={disableAnim1}
          active={!isVisible1}
          delayedCall={true}
        >
          <div className={"article-background"}>
            <article
              className={`summary-img-text-container ${
                isVisible1 ? "fade-in-anim" : null
              }`}
            >
              <div
                className={`summary-img-container ${
                  isVisible1 ? "slide-in-rev-anim" : null
                }`}
              >
                <img
                  className="summary-img"
                  src={eventImg}
                  alt="woman with makeup"
                />
              </div>
              <div
                className={`long-title ${isVisible1 ? "slide-in-anim" : null}`}
              >
                <h1>EVENTS &#38;</h1>
                <h1>SPECIAL OCCASIONS</h1>
              </div>
            </article>
          </div>
        </VizSens>
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility={"top"}
          onChange={disableAnim2}
          active={!isVisible2}
          delayedCall={true}
        >
          <div className={"article-background"}>
            <article
              className={`summary-img-text-container ${
                isVisible2 ? "fade-in-anim" : null
              }`}
            >
              <h1 className={`${isVisible2 ? "slide-in-rev-anim" : null}`}>
                BRIDAL
              </h1>
              <div
                className={`summary-img-container ${
                  isVisible2 ? "slide-in-anim" : null
                }`}
              >
                <img
                  className="summary-img"
                  src={bridalImg}
                  alt="woman with makeup"
                />
              </div>
            </article>
          </div>
        </VizSens>
        <VizSens
          offset={{ top: vizOffset }}
          partialVisibility={"top"}
          onChange={disableAnim3}
          active={!isVisible3}
          delayedCall={true}
        >
          <div className={"article-background"}>
            <article
              className={`summary-img-text-container ${
                isVisible3 ? "fade-in-anim" : null
              }`}
            >
              <div
                className={`summary-img-container ${
                  isVisible3 ? "slide-in-rev-anim" : null
                }`}
              >
                <img
                  className="summary-img"
                  src={editorialImg}
                  alt="woman with makeup"
                />
              </div>
              <h1 className={`${isVisible3 ? "slide-in-anim" : null}`}>
                EDITORIAL
              </h1>
            </article>
          </div>
        </VizSens>
        <div className="call-to-action">
          <h1>BOOKING</h1>
          <p>
            Let Ellie's diverse experience and keen eye for detail enhance your
            natural beauty. Book for your professional makeup service today.
            Contact now and Ellie will get back to you soon.
          </p>
          <BtnBookNow />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
