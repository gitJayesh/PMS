// User registration - Only POST request where user can register into the website

import express from "express";
import { registerUser, authUser } from "../testController/userController.js";

const router = express.Router();

router.route("/").post(registerUser);

// router.route("/:id").get(getUserById);
router.route("/login").post(authUser);

export default router;
