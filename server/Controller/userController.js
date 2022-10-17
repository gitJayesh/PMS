import asyncHandler from "express-async-handler";
import stories from "../Models/stories.js";
import generateToken from "../utils/generateToken.js";
import User from "../Models/User.js";

// @desc    Register a new user
// @route   POST /api/user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  //res.send("Hello");

  const { name, email, phone, isPM, password } = req.body;

  console.log(name, email, phone, isPM, password.red.bold);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public

// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   console.log(user);

//   if (user && password) {
//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// });

// Admin controller
// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
// const getAllUsers = asyncHandler(async (req, res) => {
//   const data = await User.find({}).select("-password");
//   res.send(data);
// });

// @desc    ADD NEW STORIES
// @route   POST /api/user/addstories
// @access  Public

// Admin controller
// @desc    Get all users
// @route   GET /api/users/getAllStory
// @access  Private/Admin

const getAllStory = asyncHandler(async (req, res) => {
  const data = await stories.find({});
  res.send(data);
});

// Admin controller
// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
// const getUserById = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params._id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404);
//     throw new error("User not found");
//   }
// });

export // registerUser,
// getAllUsers,
// authUser,
// getUserById,
 {};
