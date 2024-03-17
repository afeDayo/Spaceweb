import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/jupiter (1).png";

const Jupiter = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="jupitaa" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>JUPITER</h1>
          </div>
          <div className="planp">
            <p>
              Jupiter stands as a colossal and captivating giant in our
              celestial neighborhood. Its intricate atmosphere, diverse moon
              system, and powerful magnetic field make it a fascinating target
              for exploration, sparking wonder and curiosity about the vast
              wonders of our solar system.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>778 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>3.15 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jupiter;
