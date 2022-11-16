import React from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminTeamsPage = () => {
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
          <h2>TEAMS</h2>
        </div>
        <div className="teams-cards">
          <div className="card card-add place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-plus fa-4x"></i>Create Team
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 1
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 2
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 3
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 4
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 5
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 6
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 7
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 8
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 9
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 10
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 11
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-people-group fa-4x"></i>Team 12
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeamsPage;
