import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import TaskContext from "../../Context/task/taskContext.js";

const TasksScreen = () => {
  // const taskContext = useContext(TaskContext);
  // const { tasks } = taskContext;
  // console.log(tasks);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get("/api/task");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);
  console.log(tasks);
  return <>hello world</>;
};

export default TasksScreen;
