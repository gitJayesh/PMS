// User registration - Only POST request where user can register into the website

import express from "express";
import {
  addstories,
  getAllStory,
  getStoryById,
} from "../Controller/storyController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(addstories).get(protect, getAllStory);

router.route("/:id").get(getStoryById);

export default router;
