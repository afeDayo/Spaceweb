import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/saturn (1).png";

const Saturn = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="saturno" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>SATURN</h1>
          </div>
          <div className="planp">
            <p>
              Saturn's enchanting rings, diverse moons, and atmospheric
              mysteries make it a captivating destination in our cosmic
              neighborhood. The beauty and complexity of Saturn continue to
              inspire scientific exploration, providing a wealth of knowledge
              about the dynamics and wonders of the outer solar system.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>1.4 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>5.59 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saturn;
