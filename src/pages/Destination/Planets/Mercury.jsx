import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/mercury.png";

const Mercury = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="mercuryy" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>MERCURY</h1>
          </div>
          <div className="planp">
            <p>
              Mercury has an extremely tenuous and almost negligible atmosphere,
              primarily composed of trace amounts of hydrogen, helium, oxygen,
              sodium, and potassium. This thin exosphere is not sufficient to
              support human life or create a breathable atmosphere.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>77 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>113.93 DAYS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mercury;
