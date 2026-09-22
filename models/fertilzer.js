const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type:String ,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    cropTypes: {
        type: String,
        required: true,
    },
    usage: {
        type: String,
        required: true,
    },
    createdat: {
        type: Date,
        required: true,
    }
})

const fertilizer = mongoose.model("fertilizer", fertilizerSchema, "fertilizer");

module.exports = fertilizer;