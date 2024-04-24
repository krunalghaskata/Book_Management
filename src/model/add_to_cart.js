
 

const mongoose = require('mongoose')
const { Schema } = mongoose;


const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        BookImage: {
            type: String,

        },
        BookName: {
            type: String
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
        }
    }],
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    totalPrice: {
        type: Number,
    }

});


module.exports = mongoose.model("Cart", cartSchema) 

 