import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth/authContext";
import "../../style/responsive.css";
import "../../style/style.css";

const SideBar = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  // const { isPM } = userInfo;
  // console.log(" jayesh", userInfo);
  const userLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
          <Link to="#">Profile</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-window-restore mxr-1"></i>
          <Link to="/storypage">Stories</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-bars-progress mxr-1"></i>
          <Link to="/taskpage">Tasks</Link>
        </li>
      </ul>
    </Fragment>
  );

  const projectManagerLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/admin">Home</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-user mxr-1"></i>
          <Link to="#">Profile</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-users mxr-1"></i>
          <Link to="/adminusers">Users</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-people-group mxr-1"></i>
          <Link to="/adminteams">Teams</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div>
      <div id="main-side-bar">
        <div className="main-side-bar">
          <div className="logo">
            <h1>
              <i
                className="fa-solid fa-diagram-project"
                style={{ color: "#2076ff", display: "block" }}
              ></i>
              <span style={{ color: "#bd0e0e" }}>P</span>
              <span style={{ color: "#6900a7" }}>M</span>
              <span style={{ color: "#00a90b" }}>S</span>
            </h1>
          </div>
          <div className="side-bar-list">
            {user && (user.isPM ? projectManagerLinks : userLinks)}
          </div>
          <div className="side-bar-footer">
            <div className="contact-us">
              <div className="contact-us-social">
                <i className="text-gray fa-brands fa-linkedin fa-2x"></i>
                <i className="text-gray fa-brands fa-twitter fa-2x"></i>
                <i className="text-gray fa-brands fa-instagram fa-2x"></i>
              </div>
              <div className="contact-us-local">
                <Link to="#">Contact Us</Link>
              </div>
            </div>
            <div className="footer-sign place-center">
              <p className="text-gray" style={{ fontSize: "0.7rem" }}>
                &copy; PMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
