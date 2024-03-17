import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/enceladus.png";

const Enceladus = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="enclloo" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>ENCELADUS</h1>
          </div>
          <div className="planp">
            <p>
              Enceladus captivates scientists and stargazers alike with its
              active geysers, icy landscapes, and potential subsurface ocean. As
              a dynamic member of Saturn's moon system, Enceladus beckons
              further exploration, inviting us to unravel the mysteries hidden
              beneath its icy exterior and consider the possibilities for
              extraterrestrial life in our vast and diverse solar system.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>1.4 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>5.67 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enceladus;
