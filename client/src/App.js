import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingScreenHome from "./Components/Screens/LandingScreenHome";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import DashboardScreen from "./Components/Screens/DashboardScreen";
import Authstate from "./Context/auth/AuthState.js";
import TaskState from "./Context/task/TaskState.js";
import TasksScreen from "./Components/Screens/TasksScreen";
import setAuthToken from "./utils/SetAuthToken";
// import PrivateRoute from "./Components/Routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Authstate>
      <TaskState>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route exact path="landing" element={<LandingScreenHome />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="taskspage" element={<TasksScreen />} />
            </Routes>
          </div>
        </Router>
      </TaskState>
    </Authstate>
  );
}

export default App;

// import UserStoryPage from "./Components/Engineer/UserStoryPage";
// import UserTaskPage from "./Components/Engineer/UserTaskPage";
// import Story from "./Components/Engineer/Story";
// import Task from "./Components/Engineer/Task";
// import AdminDash from "./Components/Manager/AdminDash";
// import AdminTeamsPage from "./Components/Manager/AdminTeamsPage";
// import AdminUsersPage from "./Components/Manager/AdminUsersPage";

/* <Route path="storypage" element={<UserStoryPage />}>
              <Route path="story" element={<Story />} />
            </Route>
            <Route path="taskpage" element={<UserTaskPage />} />
            <Route path="task" element={<Task />} />
            <Route path="admin" element={<AdminDash />} />
            <Route path="adminteams" element={<AdminTeamsPage />} />
            <Route path="adminusers" element={<AdminUsersPage />} /> */
