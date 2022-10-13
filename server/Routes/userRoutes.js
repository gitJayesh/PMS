// User registration - Only POST request where user can register into the website

import express from "express";
import {
  registerUser,
  authUser,
  getAllUsers,
} from "../testController/userController.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, getAllUsers);

// router.route("/:id").get(getUserById);
router.route("/login").post(authUser);

export default router;
