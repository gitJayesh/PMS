import React from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminUsersPage = () => {
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
          <h2>USERS</h2>
        </div>
        <div className="teams-cards">
          <div className="card card-add place-center">
            <Link to="#" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-plus fa-4x"></i>Add Engineer
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 1
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 2
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 3
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 4
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 5
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 6
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 7
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 8
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 9
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 10
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 11
            </Link>
          </div>
          <div className="card place-center">
            <Link to="" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-user fa-4x"></i>User 12
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersPage;
