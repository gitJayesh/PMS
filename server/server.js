import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import colors from "colors";
import { addstories, getAllStory } from "./Controller/userController.js";

// Initalizing config
dotenv.config();

// Initializing express
const app = express();

// Initializing database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, This is backend server!!");
});

// Router
app.use("/api/user", userRoutes);
//app.use("/api/stories", storyRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`App is running on port ${PORT}`.yellow.bold)
);
