import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/neptune.png";

const Neptune = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="nepatun" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>NEPTUNE</h1>
          </div>
          <div className="planp">
            <p>
              Neptune stands out as a distant and enigmatic ice giant, offering
              a unique blend of atmospheric mysteries, captivating moons, and
              subtle ring systems. Its distant position in the outer solar
              system invites further exploration and holds the potential to
              unveil more secrets about the complexities of our cosmic
              neighborhood.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>4.5 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>18.25 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neptune;
