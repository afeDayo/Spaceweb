import React, { useState } from "react";
import "./Destination.css";
import bkden from "../../assets/BKden.jpg";
import { Link } from "react-router-dom";

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState("");

  const handlePlanetClick = (planet) => {
    setActivePlanet(planet);
  };

  return (
    <div>
      <div className="bkden">
        <img src={bkden} alt="background" />
      </div>

      <div className="dencon">
        <div className="pickden">
          <h4>
            <span>01</span> PICK YOUR DESTINATION
          </h4>
        </div>
        <div className="denplan">
          <div className="solarone">
            <div className="div1">
              <Link
                to="/destination/sun"
                tabIndex="5"
                className={`sun ${activePlanet === "sun" ? "active" : ""}`}
                onClick={() => handlePlanetClick("sun")}
              >
                SUN
              </Link>
              <Link
                to="/destination/mercury"
                tabIndex="6"
                className={`mercury ${
                  activePlanet === "mercury" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("mercury")}
              >
                MERCURY
              </Link>
              <Link
                to="/destination/venus"
                tabIndex="7"
                className={`venus ${activePlanet === "venus" ? "active" : ""}`}
                onClick={() => handlePlanetClick("venus")}
              >
                VENUS
              </Link>
              <Link
                to="/destination/moon"
                tabIndex="8"
                className={`moon ${activePlanet === "moon" ? "active" : ""}`}
                onClick={() => handlePlanetClick("moon")}
              >
                MOON
              </Link>
              <Link
                to="/destination/mars"
                tabIndex="9"
                className={`mars ${activePlanet === "mars" ? "active" : ""}`}
                onClick={() => handlePlanetClick("mars")}
              >
                MARS
              </Link>
            </div>
            <div className="div2">
              <Link
                to="/destination/jupiter"
                tabIndex="10"
                className={`jupiter ${
                  activePlanet === "jupiter" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("jupiter")}
              >
                JUPITER
              </Link>
              <Link
                to="/destination/saturn"
                tabIndex="11"
                className={`saturn ${
                  activePlanet === "saturn" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("saturn")}
              >
                SATURN
              </Link>
              <Link
                to="/destination/uranus"
                tabIndex="12"
                className={`uranus ${
                  activePlanet === "uranus" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("uranus")}
              >
                URANUS
              </Link>
              <Link
                to="/destination/neptune"
                tabIndex="13"
                className={`neptune ${
                  activePlanet === "neptune" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("neptune")}
              >
                NEPTUNE
              </Link>
              <Link
                to="/destination/pluto"
                tabIndex="14"
                className={`pluto ${activePlanet === "pluto" ? "active" : ""}`}
                onClick={() => handlePlanetClick("pluto")}
              >
                PLUTO
              </Link>
            </div>
          </div>

          <div className="solartwo">
            <div className="div3">
              <Link
                to="/destination/lo"
                tabIndex="15"
                className={`lo ${activePlanet === "lo" ? "active" : ""}`}
                onClick={() => handlePlanetClick("lo")}
              >
                IO
              </Link>
              <Link
                to="/destination/europa"
                tabIndex="16"
                className={`europa ${
                  activePlanet === "europa" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("europa")}
              >
                EUROPA
              </Link>
              <Link
                to="/destination/ganymede"
                tabIndex="17"
                className={`ganymede ${
                  activePlanet === "ganymede" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("ganymede")}
              >
                GANYMEDE
              </Link>
              <Link
                to="/destination/callisto"
                tabIndex="18"
                className={`callisto ${
                  activePlanet === "callisto" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("callisto")}
              >
                CALLISTO
              </Link>
              <Link
                to="/destination/titan"
                tabIndex="19"
                className={`titan ${activePlanet === "titan" ? "active" : ""}`}
                onClick={() => handlePlanetClick("titan")}
              >
                TITAN
              </Link>
            </div>
            <div className="div4">
              <Link
                to="/destination/enceladus"
                tabIndex="20"
                className={`enceladus ${
                  activePlanet === "enceladus" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("enceladus")}
              >
                ENCELADUS
              </Link>
              <Link
                to="/destination/triton"
                tabIndex="21"
                className={`triton ${
                  activePlanet === "triton" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("triton")}
              >
                TRITON
              </Link>
              <Link
                to="/destination/proximacb"
                tabIndex="22"
                className={`proxima ${
                  activePlanet === "proxima" ? "active" : ""
                }`}
                onClick={() => handlePlanetClick("proxima")}
              >
                PROXIMA-CB
              </Link>
              <Link
                to="/destination/ceres"
                tabIndex="23"
                className={`ceres ${activePlanet === "ceres" ? "active" : ""}`}
                onClick={() => handlePlanetClick("ceres")}
              >
                CERES
              </Link>
              <Link
                to="/destination/eris"
                tabIndex="24"
                className={`eris ${activePlanet === "eris" ? "active" : ""}`}
                onClick={() => handlePlanetClick("eris")}
              >
                ERIS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
