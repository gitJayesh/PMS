import React, { useContext, useEffect } from "react";
// import Sidebar from "../Layout/SideBar.js";
import NavbarUser from "../Layout/NavbarUser.js";
// import Story from "./Stories/Story.js";
import StoryContext from "../../Context/story/storyContext.js";
import CreateStory from "./Stories/CreateStory.js";
import StoryCard from "./Stories/StoryCard.js";
import AuthContext from "../../Context/auth/authContext.js";

const StoriesScreen = () => {
  // const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const storyContext = useContext(StoryContext);

  const { getStory, stories } = storyContext;
  // console.log(stories);

  useEffect(() => {
    // if()
    getStory();
  }, [getStory]);
  console.log(localStorage.userInfo.isPM);
  return (
    <>
      <div>
        {/* {<Sidebar />} */}
        <div className="main-content">
          <NavbarUser />
          <div className="greeting-banner place-center">
            <h2>Stories</h2>
          </div>
          <div className="create-task">
            <CreateStory />
          </div>
          <div className="user-dashboard-cards">
            {stories &&
              stories.map((story) => (
                <StoryCard key={story._id} story={story} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesScreen;

// <div onClick={() => navigate("/story", { state: story })}>
//   <Story key={story.id} story={story} />
// </div>
