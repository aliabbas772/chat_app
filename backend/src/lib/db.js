import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB Conected: ", conn.connection.host);
  } catch (error) {
    console.error("Error Connecting to MongoDB: ", error);
    process.exit(1);
  }
};
