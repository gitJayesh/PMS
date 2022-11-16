import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingScreenHome from "./Components/Screens/LandingScreenHome";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Engineer/Dashboard";
import Register from "./Components/Auth/Register";
import UserStoryPage from "./Components/Engineer/UserStoryPage";
import UserTaskPage from "./Components/Engineer/UserTaskPage";
import Story from "./Components/Engineer/Story";
import Task from "./Components/Engineer/Task";
import AdminDash from "./Components/Manager/AdminDash";
import AdminTeamsPage from "./Components/Manager/AdminTeamsPage";
import AdminUsersPage from "./Components/Manager/AdminUsersPage";
import Authstate from "./Context/auth/AuthState.js";

function App() {
  return (
    <Authstate>
      <Router>
        <div className="App">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route exact path="/" element={<LandingScreenHome />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="storypage" element={<UserStoryPage />}>
              <Route path="story" element={<Story />} />
            </Route>
            <Route path="taskpage" element={<UserTaskPage />} />
            <Route path="task" element={<Task />} />
            <Route path="admin" element={<AdminDash />} />
            <Route path="adminteams" element={<AdminTeamsPage />} />
            <Route path="adminusers" element={<AdminUsersPage />} />
          </Routes>
        </div>
      </Router>
    </Authstate>
  );
}

export default App;
