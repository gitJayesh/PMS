import mongoose from "mongoose";

const taskschema = mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    taskdescription: {
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

const tasks = mongoose.model("Tasks", userSchema);

export default Tasks;
