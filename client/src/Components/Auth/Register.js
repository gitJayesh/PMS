import React from "react";
import { Link } from "react-router-dom";
import NavBarGuest from "../Layout/NavBarGuest";

import registerGIF from "../img/38435-register.gif";

const Register = () => {
  return (
    <>
      <div className="register-page">
        <NavBarGuest />
        <secttion className="register-card-section">
          <div className="register-card">
            <div className="login-card-gif">
              <img src={registerGIF} alt="login-gif" />
            </div>
            <div className="login-card-main">
              <form>
                <div className="register-head">
                  user <span style={{ color: "#377dff" }}>login</span>
                </div>
                <div className="form-container1">
                  <input type="text" className="input" placeholder="Name" />
                  <input type="email" className="input" placeholder="Email" />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Confirm Password"
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
              <p style={loginLink}>
                Already a User?{" "}
                <Link to="/register" style={{ color: "#377dff" }}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </secttion>
      </div>
    </>
  );
};

export default Register;

const loginLink = {
  color: "#111",
  textAllign: "center",
};
