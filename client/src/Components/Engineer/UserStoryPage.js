import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/responsive.css";
import "../../style/style.css";
import "../../style/modalstyle.css";
import SideBar from "../Layout/SideBar.js";
import NavbarUser from "../Layout/NavbarUser";

const UserStoryPage = () => {
  return (
    <>
      {<SideBar />}
      <div className="main-content">
        <NavbarUser />
        <div className="greeting-banner place-center">
          <h2>STORIES</h2>
        </div>
        <div className="user-dashboard-cards">
          <div className="user-card place-center">
            <Link
              to="story"
              id="button3"
              style={{ textAlign: "center" }}
              className="button"
            >
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 1
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 2
            </Link>
          </div>

          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 3
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 4
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 5
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 6
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 7
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 8
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 9
            </Link>
          </div>
          <div className="user-card place-center">
            <Link to="story" style={{ textAlign: "center" }}>
              <i className="fa-solid fa-window-restore fa-3x"></i>Story 10
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="bg-modal">
        <div className="modal-contents">
          <div className="close">+</div>
          <img src="https://richardmiddleton.me/comic-100.png" alt="" />
          <div className="model-task-heading">
            <h3>STORY 1</h3>
          </div>
          <div className="modal-task-desc">
            <h3>Story Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nemo saepe quasi, doloremque nostrum eligendi minus natus?
              Quibusdam distinctio aliquam ipsa magnam eligendi aut nesciunt
              excepturi! A repudiandae iste magnam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quidem saepe, voluptate soluta
              voluptatibus quam nihil. Tenetur pariatur nemo esse odio, nostrum
              sequi praesentium reprehenderit. Repellendus distinctio minima
              fugit perferendis pariatur?
            </p>
          </div>
          <div className="modal-date">
            <h3>Due date</h3>
            <p>dd-mm-yyy</p>
          </div>
          {/* <!-- <div className="modal-task-progress">
      <h3>Progress</h3>
      <div className="progress-container">
        <div className="progress"></div>
      </div>
    </div> --> */}

          <div className="teams-cards">
            <div>
              <h3>Team Members</h3>
            </div>
            <div className="card place-center">
              <Link to="" style={{ textAlign: "center" }}>
                <i className="fa-solid fa-user fa-3x"></i>User 1
              </Link>
            </div>
            <div className="card place-center">
              <Link to="" style={{ textAlign: "center" }}>
                <i className="fa-solid fa-user fa-3x"></i>User 2
              </Link>
            </div>
            <div className="card place-center">
              <Link to="" style={{ textAlign: "center" }}>
                <i className="fa-solid fa-user fa-3x"></i>User 3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStoryPage;
