const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: null,

    },
    description: {
        type: String,
        required: true,
        default: null
    },
    price: {
        type: Number,
        required: true,
        default: null
    },
    quantity: {
        type: Number,
        required: true,
        default: null
    },
    image: {
        type: String,
        required: true,

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    role: {
        type: String,
        enum: ["admin", "user", "author"],
        default: "user"
    },






});

module.exports = mongoose.model("Book", BookSchema); 