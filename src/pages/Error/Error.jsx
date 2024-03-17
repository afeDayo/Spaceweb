import React from "react";
import "./Error.css";
import errorbk from "../../assets/errorbk.jpg";
import earth from "../../assets/earth.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="errorimg">
        <img src={errorbk} alt="" />
      </div>
      <div className="cantbf">
        <div className="earth">
          <img src={earth} alt="" />
          <div className="pnfoops">
            <h1>404</h1>
            <h3>Page not found</h3>
            <p>Oops. the page you were looking for does not exist</p>
            <Link to="/">
              <button>BACK TO HOME</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
