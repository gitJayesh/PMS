import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import user from "./data/users.js";
import User from "./Models/User.js";

import connectDB from "./config/db.js";
import users from "./data/users.js";

dotenv.config();

connectDB();

const importdata = async ()=> {
    try{
        await User.deleteMany() 

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
    }
}

