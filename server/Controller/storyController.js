import asyncHandler from "express-async-handler";
import stories from "../Models/stories.js";
import generateToken from "../utils/generateToken.js";

// @desc    ADD NEW STORIES
// @route   POST /api/user/addstories
// @access  Public

const addstories = asyncHandler(async (req, res) => {
  //res.send("Hello");

  const { storyname, description, duedate, status } = req.body;

  console.log(storyname, description, duedate, status);
  const storyExists = await stories.findOne({ storyname });

  if (storyExists) {
    res.status(400);
    throw new Error("story already exists");
  }

  const story = await stories.create({
    storyname,
    description,
    duedate,
    status,
  });

  if (story) {
    res.status(201).json({
      //_id: user._id,
      storyname: story.storyname,
      description: story.description,
      duedate: story.duedate,
      status: story.status,
      //token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
});

export { addstories };
