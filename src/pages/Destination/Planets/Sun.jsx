import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/sun (1).png";

const Sun = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="sunn" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>SUN</h1>
          </div>
          <div className="planp">
            <p>
              The Sun is a dynamic and powerful celestial body, and studying it
              provides valuable insights into the fundamental processes that
              govern the behavior of stars in our universe. Observing the Sun
              directly without proper protection can be harmful to the eyes.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>149.6 MIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>221.43 DAYS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sun;
