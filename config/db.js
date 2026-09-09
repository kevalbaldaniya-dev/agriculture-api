const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/agriculture_database");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
