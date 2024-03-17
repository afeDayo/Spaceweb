import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/venus.png";

const Venus = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="venues" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>VENUS</h1>
          </div>
          <div className="planp">
            <p>
              Venus experiences extreme surface temperatures, with an average of
              around 467 degrees Celsius (872 degrees Fahrenheit). This is
              hotter than the surface of Mercury, even though Venus is farther
              from the Sun.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>41 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>60.62 DAYS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venus;
