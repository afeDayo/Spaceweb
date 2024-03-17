import React, { useEffect, useState } from "react";
import "./Navbar.css";
import spacelogo from "../assets/Group 2.svg";
import line from "../assets/Rectangle.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
    setIsOpen(false);
  };

  // ==========================================

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="spacenav">
      <div className="mainlogo">
        <img src={spacelogo} alt="logo" />
      </div>

      <div className="spacebar d-none d-md-flex">
        <Link
          to="/"
          className={`spacehome ${activeLink === "spacehome" ? "active" : ""}`}
          tabIndex="1"
          onClick={() => handleLinkClick("spacehome")}
        >
          <span>00</span> HOME
        </Link>
        <Link
          to="/destination"
          className={`spaceden ${activeLink === "spaceden" ? "active" : ""}`}
          tabIndex="2"
          onClick={() => handleLinkClick("spaceden")}
        >
          <span>01</span> DESTINATION
        </Link>
        <Link
          to="/crew"
          className={`spacecrew ${activeLink === "spacecrew" ? "active" : ""}`}
          tabIndex="3"
          onClick={() => handleLinkClick("spacecrew")}
        >
          <span>02</span> CREW
        </Link>
        <Link
          to="/technology"
          className={`spacetech ${activeLink === "spacetech" ? "active" : ""}`}
          tabIndex="4"
          onClick={() => handleLinkClick("spacetech")}
        >
          <span>03</span> TECHNOLOGY
        </Link>
      </div>

      {/* ===================================================== */}

      <div className="nav d-md-none">
        <div
          className={`navbar-hamburger ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isOpen && (
          <div className="navbar-dropdown">
            <ul>
              <li
                className={`spacehome ${
                  activeLink === "spacehome" ? "active" : ""
                }`}
                tabIndex="1"
                onClick={() => handleLinkClick("spacehome")}
              >
                <Link to="/">
                  <span>00</span> HOME
                </Link>
              </li>
              <li
                className={`spaceden ${
                  activeLink === "spaceden" ? "active" : ""
                }`}
                tabIndex="2"
                onClick={() => handleLinkClick("spaceden")}
              >
                <Link to="/destination">
                  <span>01</span> DESTINATION
                </Link>
              </li>
              <li
                className={`spacecrew ${
                  activeLink === "spacecrew" ? "active" : ""
                }`}
                tabIndex="3"
                onClick={() => handleLinkClick("spacecrew")}
              >
                <Link to="/crew">
                  <span>02</span> CREW
                </Link>
              </li>
              <li
                className={`spacetech ${
                  activeLink === "spacetech" ? "active" : ""
                }`}
                tabIndex="4"
                onClick={() => handleLinkClick("spacetech")}
              >
                <Link to="/technology">
                  <span>03</span> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="line">
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default Navbar;
