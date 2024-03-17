import React, { useEffect, useState } from "react";
import "./Home.css";
import dmainbk from "../../assets/dmainbk.jpg";
import mdhomebk from "../../assets/mdhomebk.jpg";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBackground = () => {
    if (windowWidth >= 1440 && windowWidth <= 769) {
      return { dmainbk };
    } else if (windowWidth >= 768 && windowWidth <= 576) {
      return { mdhomebk };
    } else {
      return "";
    }
  };

  return (
    <div className="spacehome">
      <div className={`homebk ${getBackground()}`}>
        <img className="dmainbk" src={dmainbk} alt="" />
      </div>

      <div className="homecon">
        <div className="homewrite">
          <div>
            <h4 className="m-0">SO, YOU WANT TO TRAVEL TO</h4>
          </div>
          <div>
            <h1 className="m-0">SPACE</h1>
          </div>
          <div>
            <p className="m-0">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        <div className="homeex">
          <h3 className="m-0">EXPLORE</h3>
          <div className="hoverex"></div>
        </div>
      </div>
      <div className={`md-homebk ${getBackground()}`}>
        <img src={mdhomebk} alt="" />
      </div>
    </div>
  );
};

export default Home;
