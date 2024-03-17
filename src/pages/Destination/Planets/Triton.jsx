import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/triton.png";

const Triton = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="triii" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>TRITON</h1>
          </div>
          <div className="planp">
            <p>
              Triton's retrograde orbit, active surface features, and icy
              composition make it a captivating subject of study. As Neptune's
              largest moon, Triton offers a glimpse into the outer realms of our
              solar system, inviting exploration and sparking scientific inquiry
              into the complex processes shaping the moons of the gas giants
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>4.35 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>17,582.68 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triton;
