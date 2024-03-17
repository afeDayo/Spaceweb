import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/ganymede.png";

const Ganymede = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="ganny" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>GANYMEDE</h1>
          </div>
          <div className="planp">
            <p>
              Ganymede, the largest moon in our solar system and a captivating
              member of Jupiter's moon family, presents a unique blend of
              intriguing features and celestial wonders. Discovered by Galileo
              Galilei in 1610, Ganymede stands out not only for its impressive
              size but also for its diverse geological characteristics.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>882 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>3.57 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ganymede;
