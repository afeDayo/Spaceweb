import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/callisto (1).png";

const Callisto = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="callima" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>CALLISTO</h1>
          </div>
          <div className="planp">
            <p>
              Callisto, one of Jupiter's remarkable moons, offers a serene and
              mysterious landscape within the vast reaches of our solar system.
              Discovered by Galileo Galilei in 1610, Callisto captivates
              astronomers and space enthusiasts with its unique features and
              distant allure.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>1.88 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>7.63 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callisto;
