import React, { useEffect, useState } from "react";
import "./Crew.css";
import bkcrew from "../../assets/BKcrew.png";
import lastl from "../../assets/lastline.png";

const Crew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContent = [
    {
      profession: "COMMANDER",
      name: "DOUGLAS HURLEY",
      about:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "../../../src/assets/commander.png",
    },

    {
      profession: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "../../../src/assets/mission.png",
    },

    {
      profession: "PILOT",
      name: "VICTOR GLOVER",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "../../../src/assets/pilot.png",
    },

    {
      profession: "FLIGHT ENGINEER",
      name: "ANOUSHEN ANSARI",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "../../../src/assets/flightengine.png",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="bkcrew">
        <img src={bkcrew} alt="" />
      </div>
      <div className="cewcon">
        <div className="pickcrew">
          <h4>
            <span>02</span> PICK YOUR DESTINATION
          </h4>
        </div>
        <div className="carocon">
          <div className="slidescon">
            {slideContent.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{
                  transform: `translateX(calc(-100% * ${currentSlide}))`,
                }}
              >
                <div className="crewbod">
                  <h3>{slide.profession}</h3>
                  <h1>{slide.name}</h1>
                  <p>{slide.about}</p>
                </div>
                <div className="crewmem">
                  <img src={slide.image} alt="nothing" />
                </div>
              </div>
            ))}
          </div>
          <div className="dotindi">
            {slideContent.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <div className="lastl">
            <img src={lastl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
