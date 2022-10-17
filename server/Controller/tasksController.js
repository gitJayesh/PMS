import asyncHandler from "express-async-handler";
import Tasks from "../Models/Tasks.js";
import generateToken from "../utils/generateToken.js";

// @desc    ADD NEW TASK
// @route   POST /api/task/addtask
// @access  Public

const addtask = asyncHandler(async (req, res) => {
  //   res.send("Hello");

  const { taskname, taskdescription, duedate, status } = req.body;

  console.log(taskname, taskdescription, duedate, status);
  const taskExists = await Tasks.findOne({ taskname });

  if (taskExists) {
    res.status(400);
    throw new Error("task already exists");
  }

  const task = await Tasks.create({
    taskname,
    taskdescription,
    duedate,
    status,
  });

  if (task) {
    res.status(201).json({
      _id: task._id,
      taskname: task.taskname,
      taskdescription: task.taskdescription,
      duedate: task.duedate,
      status: task.status,
      //token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
});

// Admin controller
// @desc    Get all Tasks
// @route   GET /api/task
// @access  Private/Admin

const getAllTasks = asyncHandler(async (req, res) => {
  const data = await Tasks.find({});
  res.send(data);
});

export { addtask, getAllTasks };
