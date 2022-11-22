import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "../Layout/SideBar.js";
import "../../style/responsive.css";
import "../../style/style.css";
import NavbarUser from "../Layout/NavbarUser";
import GreetingBanner from "../Layout/GreetingBanner.js";
import AuthContext from "../../Context/auth/authContext.js";

const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { userInfo } = authContext;

  const { isPM } = userInfo;
  console.log(" jayesh", userInfo);
  const userLinks = (
    <Fragment>
      <div className="card place-center">
        <Link to="" style={{ textAlign: "center" }}>
          <i className="fa-solid fa-people-group fa-4x"></i>My Teams
        </Link>
      </div>
      <div className="card place-center">
        <Link to="/storypage" style={{ textAlign: "center" }}>
          <i className="fa-solid fa-laptop-file fa-4x"></i>My Stories
        </Link>
      </div>
      <div className="card place-center">
        <Link to="/taskspage" style={{ textAlign: "center" }}>
          <i className="fa-solid fa-bars-progress fa-4x"></i>My Tasks
        </Link>
      </div>
    </Fragment>
  );

  const projectManagerLinks = (
    <Fragment>
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
    </Fragment>
  );

  return (
    <>
      <SideBar />
      <div className="main-content">
        <NavbarUser />
        <GreetingBanner />
        <div className="dashboard-cards">
          {isPM ? projectManagerLinks : userLinks}
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
