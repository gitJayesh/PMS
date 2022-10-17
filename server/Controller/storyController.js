import asyncHandler from "express-async-handler";
import Stories from "../Models/Stories.js";
import generateToken from "../utils/generateToken.js";

// @desc    ADD NEW STORIES
// @route   POST /api/story/addstories
// @access  PRIVATE

const addstories = asyncHandler(async (req, res) => {
  //res.send("Hello");

  const { storyname, description, duedate, status } = req.body;

  console.log(storyname, description, duedate, status);
  const storyExists = await Stories.findOne({ storyname });

  if (storyExists) {
    res.status(400);
    throw new Error("story already exists");
  }

  const story = await Stories.create({
    storyname,
    description,
    duedate,
    status,
  });

  if (story) {
    res.status(201).json({
      _id: story._id,
      storyname: story.storyname,
      description: story.description,
      duedate: story.duedate,
      status: story.status,
      token: generateToken(story._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
});

// Admin controller
// @desc    Get all story
// @route   GET /api/users/getAllStory
// @access  Private/Admin

const getAllStory = asyncHandler(async (req, res) => {
  const data = await Stories.find({});
  res.send(data);
});

// Admin controller
// @desc    Get user by id
// @route   GET /api/story/:id
// @access  Private/Admin

const getStoryById = asyncHandler(async (req, res) => {
  const story = await Stories.findById(req.params.id);
  //console.log("helloworld");

  if (story) {
    res.json(story);
  } else {
    res.status(404);
    throw new error("User not found");
  }
});

export { addstories, getAllStory, getStoryById };
