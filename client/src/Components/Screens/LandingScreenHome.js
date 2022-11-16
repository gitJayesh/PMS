import React from "react";
import LandingNavbar from "../Layout/LandingNavbar";

const LandingScreenHome = () => {
  const user = "User";

  return (
    <div className="hero">
      <LandingNavbar />
      <div className="hero-content">
        <div className="hero-content-welcome">
          <p>Welcome {user}</p>
        </div>
        <div className="hero-content-message">
          <h1>
            Everything you need for a
            <span style={{ color: "#377dff" }}> Happy</span> and
            <span style={{ color: "#377dff" }}> Productive</span> Team - All in
            one place
          </h1>
        </div>
        <div className="hero-content-btn">
          <button className="hero-content-btn1">
            <a href="!#">Register</a>
          </button>
          <button className="hero-content-btn2">
            <a href="!#">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreenHome;
