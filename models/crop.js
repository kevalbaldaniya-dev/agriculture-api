const mongoose = require("mongoose");
//crop table for famer total crop show
const cropSchema = new mongoose.Schema({
  farmer_id: {
    type: String,
    required: true,
    maxLength: 99,
  },
  farm_id: {
    type: Number,
    required: true,
  },
  crop_name: {
    type: String,
    required: true,
  },
  crop_type: {
    type: String,
    required: true,
  },
  variety: {
    type: String,
    required: true,
  },
  sowingdate: {
    type: Date,
    required: true,
  },
  expectedHarvestDate: {
    type: Date,
    required: true,
  },
  actualHarvestDate: {
    type: Date,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  expectedProduction: {
    type: String,
    required: true,
  },
  actualProduction: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    required: true,
  },
  farms:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "farm",
  },
  users:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
  }
});

const crop = mongoose.model("crop", cropSchema, "crop");

module.exports = crop;