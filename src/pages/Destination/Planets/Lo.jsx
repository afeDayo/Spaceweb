import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/io.png";

const Lo = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="iooo" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>IO</h1>
          </div>
          <div className="planp">
            <p>
              Io, the innermost of Jupiter's four largest moons known as the
              Galilean moons, is a celestial marvel teeming with volcanic
              activity and unique geological features. Discovered by Galileo
              Galilei in 1610, Io captivates astronomers and space enthusiasts
              with its dynamic and ever-changing landscape.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>628 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>2.54 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lo;
