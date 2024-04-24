const mongoose = require("mongoose");
const { Schema } = mongoose;

const otpSchema = new Schema({

    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    otp: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    createdAt: {
        type: Date, 
        default: Date.now,

    },

});

module.exports = mongoose.model("Otp", otpSchema);

