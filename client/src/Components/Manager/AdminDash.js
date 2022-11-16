import React from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminDash = () => {
  return (
    <div>
      {<AdminSideBar />}
      <div className="main-content">
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
          <div className="logout-btn place-center">
            <Link to="#">
              <i className="fa-solid fa-right-from-bracket fa-2x"></i>
            </Link>
          </div>
        </nav>
        <div className="greeting-banner place-center">
          <h2>
            Hello <span style={{ color: "blue" }}>Manager</span>, Welcome To The
            Dashboard!
          </h2>
        </div>
        <div className="dashboard-cards">
          <div className="card place-center">
            <Link to="/adminteams" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Teams
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-laptop-file fa-4x"></i>Stories
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-bars-progress fa-4x"></i>Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
