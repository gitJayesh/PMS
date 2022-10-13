// User registration - Only POST request where user can register into the website

import express from "express";
import { addstories } from "../Controller/storyController.js";

const router = express.Router();

router.route("/").post(addstories);

export default router;
