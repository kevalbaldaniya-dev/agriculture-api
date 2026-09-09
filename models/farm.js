const mongoose = require("mongoose");
// farm for farm details
const farmSchema = new mongoose.Schema({
    farmer_id: {
        type: String,
        required: true,
        maxLength: 99
    },
    farm_name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    areaunit: {
        type: Number,
        required: true,
    },
    soiltype: {
        type: String,
        required: true,
    },
    irrigationtype: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    createdat: {
        type: Date,
        required: true,
    },
    updatedat: {
        type: Date,
        required: true,
    }
    
})

const farm = mongoose.model("farm", farmSchema, "farm");

module.exports = farm;