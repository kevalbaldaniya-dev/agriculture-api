const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        maxLength: 99,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        maxLength: 99,
    },
    name: {
        type: String,
        required: true,
        maxLength: 99,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        maxLength: 9,
    },
    unit: {
        type: Number,
        required: true,
        maxLength: 9,
    },
    stock: {
        type: Number,
        required: true,
        maxLength: 9,
    },
    brand: {
        type: String,
        required: true,
    },
    croptype: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    createdat: {
        type: Date,

    },
    updatedat: {
        type: Date,

    }
})

const product = mongoose.model("product", ProductSchema, "product");

module.exports = product 