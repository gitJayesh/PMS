import mongoose from "mongoose";

const storyschema = mongoose.Schema(
  {
    storyname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const stories = mongoose.model("Stories", storyschema);

export default stories;
