import React from "react";
import "./Planet.css";
import bkden from "../../../assets/BKden.jpg";
import planet from "../../../assets/eris.png";

const Eris = () => {
  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>
      <div className="allplannn">
        <div className="planaimg">
          <img className="erika" src={planet} alt="" />
        </div>
        <div className="plantexx">
          <div className="planeach">
            <h1>ERIS</h1>
          </div>
          <div className="planp">
            <p>
              Eris, a distant and enigmatic dwarf planet located in the
              scattered disc of our solar system, offers a unique glimpse into
              the outer reaches and complexities of our cosmic neighborhood.
              Discovered in 2005, Eris has stirred scientific interest with its
              significant size and intriguing characteristics.
            </p>
          </div>
          <hr className="planhr" />
          <div className="navplan">
            <div className="plannavone">
              <h5>AVG. DISTANCE</h5>
              <h3>16 BIL. KM</h3>
            </div>
            <div className="plannavtwo">
              <h5>EST. TRAVEL TIME</h5>
              <h3>66 YEARS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eris;
