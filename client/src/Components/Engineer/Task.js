import React from "react";
import { Link } from "react-router-dom";
import "../../style/responsive.css";
import "../../style/style.css";
import NavbarUser from "../Layout/NavbarUser";
import SideBar from "../Layout/SideBar.js";

const Task = () => {
  return (
    <div>
      {<SideBar />}
      <div className="main-content">
        <NavbarUser />

        <div className="greeting-banner place-center">
          <h2>TASK 1</h2>
        </div>
        <div className="project-desc">
          <h2 style={{ color: "black" }}>Task Description</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vero officia recusandae exercitationem impedit nostrum doloremque
            quidem harum odit atque expedita in nulla quisquam, placeat
            laudantium ducimus nobis eligendi molestiae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Perspiciatis vel, quas, neque
            sint reiciendis reprehenderit corporis, aperiam nulla numquam
            laboriosam alias fugiat incidunt maiores voluptas quaerat molestias
            atque sequi! Vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
