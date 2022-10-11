import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected`.cyan.bold);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;