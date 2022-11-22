import { Link } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../Context/auth/authContext";

const NavbarUser = () => {
  const authContext = useContext(AuthContext);
  const { logout, userInfo } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-search">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Type here..."
          />
          <button className="search-bar-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="logout-btn " onClick={onLogout}>
          <p>{userInfo && userInfo.name} </p>
          <Link to="#">
            <i className="fa-solid fa-right-from-bracket fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
