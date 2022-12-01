import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "../Layout/SideBar.js";
import NavbarUser from "../../Layout/NavbarUser.js";
import Story from "./Story.js";
import { useNavigate } from "react-router-dom";
import StoryContext from "../../../Context/story/storyContext.js";
import CreateStory from "./CreateStory";
import StoryCard from "./StoryCard.js";
import AuthContext from "../../../Context/auth/authContext.js";
import axios from "axios";

const AdminStoriesScreen = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.token}`;
  const navigate = useNavigate();

  const storyContext = useContext(StoryContext);
  const authContext = useContext(AuthContext);

  const { user, loadUser } = authContext;

  const { adminGetAllstory, adminStories } = storyContext;
  // console.log(adminStories);

  const [modalStyle, setModalStyle] = useState("none");

  useEffect(() => {
    loadUser();
    adminGetAllstory();
  }, []);

  console.log(adminStories);

  return (
    <>
      <div>
        <div className="main-content">
          <NavbarUser />
          <div className="greeting-banner place-center">
            <h2>Stories</h2>
          </div>
          <div className="user-dashboard-cards">
            {user && user.isPM && <CreateStory />}
            {adminStories &&
              adminStories.map((story) => (
                <StoryCard key={story._id} story={story} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminStoriesScreen;
