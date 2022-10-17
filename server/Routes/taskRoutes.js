// User registration - Only POST request where user can register into the website

import express from "express";
import { addtask, getAllTasks } from "../Controller/tasksController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(addtask).get(protect, getAllTasks);

export default router;
