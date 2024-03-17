import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/mars.png";

const Mars = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="marss" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>MARS</h1>
          </div>
          <div className="planp">
            <p>
              Don't forget to pack your hiking boots. You'll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It's two and a half times the size of Everest!
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>225 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>9 MONTHS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
