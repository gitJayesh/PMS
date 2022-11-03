import mongoose, { Schema } from "mongoose";

const taskschema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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

const Tasks = mongoose.model("Tasks", taskschema);

export default Tasks;
