const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    
    name: {
        type: String,
        default: null,

    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "author"],
        default: "user"
    },
    verified: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", UserSchema); 