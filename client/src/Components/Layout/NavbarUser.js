import { Link } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../Context/auth/authContext";
import SideBar from "./SideBar";

const NavbarUser = () => {
  const authContext = useContext(AuthContext);
  // const { logout, userInfo } = authContext;

  // const onLogout = () => {
  //   logout();
  // };
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-search">
          {/* <input
            className="search-bar-input"
            type="text"
            placeholder="Type here..."
          />
          <button className="search-bar-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
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
        </div>
        <div className="logout-btn ">
          <SideBar />
          {/* <p>{userInfo && userInfo.name} </p>
          <Link to="#">
            <i className="fa-solid fa-right-from-bracket fa-2x"></i>
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
