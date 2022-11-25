import React, { useContext, useEffect, useState } from "react";
// import Sidebar from "../Layout/SideBar.js";
import NavbarUser from "../Layout/NavbarUser.js";
import Tasks from "./Tasks/Tasks.js";

import TaskContext from "../../Context/task/taskContext.js";
import CreateTask from "./Tasks/CreateTask.js";

const TasksScreen = () => {
  const taskContext = useContext(TaskContext);
  const { getTasks, tasks } = taskContext;
  console.log(tasks);

  // const [tasks, setTasks] = useState([]);
  const [modalStyle, setModalStyle] = useState("none");
  console.log(modalStyle);

  // const onClick = () => {
  //   setModalStyle("block");
  // };

  useEffect(() => {
    getTasks();
  }, []);
  // tasks && console.log(tasks);
  return (
    <>
      <div>
        {/* {<Sidebar />} */}
        <div className="main-content">
          <NavbarUser />
          <div className="greeting-banner place-center">
            <h2>TASKS</h2>
          </div>
          <div className="create-task">
            <CreateTask />
          </div>
          <div className="user-dashboard-cards">
            {tasks &&
              tasks.map((task) => (
                <div onClick={() => setModalStyle("block")}>
                  <Tasks key={task.id} task={task} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksScreen;
