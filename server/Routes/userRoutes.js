// User registration - Only POST request where user can register into the website

import express from "express";
import {
  registerUser,
  authUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../testController/userController.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, getAllUsers);

router.route("/login").post(authUser);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;
