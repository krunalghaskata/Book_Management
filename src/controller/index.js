const userController = require('../controller/userController/index')
const bookController = require('../controller/bookController/index')
const cartController = require('../controller/cartController/index')
const orderController = require('../controller/orderController/index')
const otpController = require('../controller/otpController/index')
const paymentController = require('../controller/paymentController/index')
const FeedbackController = require('../controller/FeedBackController/index')

const controller = {
    ...userController,
    ...bookController,
    ...cartController,
    ...orderController,
    ...otpController,
    ...paymentController,
    ...FeedbackController
}
module.exports = controller;