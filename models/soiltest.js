const mongoose = require("mongoose");
//crop table for famer total crop show 
const soiltestSchema = new mongoose.Schema({
  farmer_id: {
    type: String,
    required: true,
    maxLength: 99,
  },
  farm_id: {
    type: String,
    required: true,
    maxLength: 99,
  },
  nitrogen: {
    type: String,
    required: true,
  },
  phosphorus: {
    type: String,
    required: true,
  },
  potassium: {
    type: String,
    required: true,
  },
  ph: {
    type: String,
    required: true,
  },
  moisture: {
    type: Date,
    required: true,
  },
  soil_type: {
    type: Date,
    required: true,
  },
  test_date: {
    type: Date,
    required: true,
  },
  recommendation: {
    type: String,
    required: true,
  },
  farms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "farm",
  }
});

const soiltest = mongoose.model("soiltest", soiltestSchema, "soiltest");

module.exports = soiltest;