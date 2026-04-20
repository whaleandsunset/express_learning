import mongoose from "mongoose";

const databaseconnect = async () => {
  const url = process.env.CONNECTION_STRING;
    try {
      await mongoose.connect(url);
      console.log("Database connected");
    } catch (err) {
      console.error("Database connection failed:", err);
    }
};

export default databaseconnect;