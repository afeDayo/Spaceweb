import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/moon.png";

const Moon = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="mooon" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>MOON</h1>
          </div>
          <div className="planp">
            <p>
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>384,400 KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>13.66 HOURS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
