import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/europa.png";

const Europa = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>EUROPA</h1>
          </div>
          <div className="planp">
            <p>
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover's dream. With an icy surface, it's perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
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
              <h3>3 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
