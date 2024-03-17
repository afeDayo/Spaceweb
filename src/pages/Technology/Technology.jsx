import React, { useState } from "react";
import "./Technology.css";
import bktech from "../../assets/BKTech.jpg";

const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContent = [
    {
      profession: "THE TERMINOLOGY…",
      name: "LAUNCH VEHICLE",
      about:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "../../../src/assets/spacecraft1.jpg",
      img: "../../../src/assets/craft1.jpg",
      mobimg: "../../../src/assets/mobbk1.png",
    },

    {
      profession: "THE TERMINOLOGY…",
      name: "SPACEPORT",
      about:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      image: "../../../src/assets/spacecraft2.jpg",
      img: "../../../src/assets/craft2.jpg",
      mobimg: "../../../src/assets/mobbk2.png",
    },

    {
      profession: "THE TERMINOLOGY…",
      name: "SPACE CAPSULE",
      about:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "../../../src/assets/spacecraft3.jpg",
      img: "../../../src/assets/craft3.jpg",
      mobimg: "../../../src/assets/mobbk3.png",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="bktech">
        <img src={bktech} alt="" />
      </div>
      <div className="techcon">
        <div className="picktech">
          <h4>
            <span>03</span> SPACE LAUNCH 101
          </h4>
        </div>
        <div className="techcarocon">
          <div className="slidestechcon">
            {slideContent.map((slide, index) => (
              <div
                key={index}
                className={`slidetech ${
                  index === currentSlide ? "active" : ""
                }`}
                style={{
                  transform: `translateX(calc(-100% * ${currentSlide}))`,
                }}
              >
                <div className="techbod">
                  <h5>{slide.profession}</h5>
                  <h1>{slide.name}</h1>
                  <p>{slide.about}</p>
                </div>
                <div className="techmem d-none d-xl-flex">
                  <img src={slide.image} alt="nothing" />
                </div>
                <div className="techmemd d-xl-none">
                  <img src={slide.img} alt="nothing" />
                </div>
                <div className="techmobile d-sm-none">
                  <img src={slide.mobimg} alt="nothing" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dottech">
          {slideContent.map((_, index) => (
            <div
              key={index}
              className={`dotto ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              <h3>{index + 1}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
