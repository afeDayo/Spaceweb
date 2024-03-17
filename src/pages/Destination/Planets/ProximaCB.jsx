import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/Proxima_Centauri_b.png";

const ProximaCB = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="proxicb" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>PROXIMA</h1>
          </div>
          <div className="planp">
            <p>
              Proxima Centauri B, a distant exoplanet orbiting Proxima Centauri,
              presents an intriguing celestial canvas for scientific exploration
              and cosmic contemplation. Discovered in 2016, this exoplanet is
              part of the Alpha Centauri star system, nestled within the closest
              known stellar neighborhood to our solar system.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>4.24 LIT. YRS</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>162,000 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProximaCB;
