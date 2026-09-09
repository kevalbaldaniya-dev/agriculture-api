const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 99
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    profile_image: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isactive: {
        type: Boolean,
        required: true,
    },
    createdat: {
        type: Date,
        required: true,
    },
})

const user = mongoose.model("user", userSchema, "user");

module.exports = user;