const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
        },
        status: {
            type: String,
            enum: ['cancel', 'pending', 'success'],
            default: 'pending'
        }
    }],
    totalPrice: {
        type: Number,
    }
});

module.exports = mongoose.model("Order", orderSchema); 
 