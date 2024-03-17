import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/ceres.png";

const Ceres = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="celeb" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>CERES</h1>
          </div>
          <div className="planp">
            <p>
              Ceres, the largest object in the asteroid belt between Mars and
              Jupiter, stands as a fascinating and unique celestial body,
              captivating astronomers with its enigmatic characteristics and
              potential clues about the early solar system.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>414 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>1.67 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceres;
