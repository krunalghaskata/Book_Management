


const Book = require('../../model/bookModel');
const Order = require('../../model/order_Book');
const User = require('../../model/userModel');
const getMessage = require('../../utils/message')

const statusOrder = async (req, res) => {

    try {
        const { status, orderId, bookId } = req.body;
        const userId = req.user.id

        const user = await User.findById(userId);

        if (!user || user.role !== 'author') {
            return res.status(403).json({ message: getMessage('FORBIDDEN') });
        }

        const authorsBook = await Book.find({ createdBy: userId, _id: bookId })

        if (authorsBook.length === 0) {
            return res.status(403).json({ message: getMessage("AUTHOR_NOT_CREATE_SPECIFIC_BOOK") });
        }

        const order = await Order.findOneAndUpdate(
            { _id: orderId, "items.bookId": bookId },
            { $set: { "items.$.status": status } },
            { new: true });


        if (!order) {
            return res.status(404).json({ message: getMessage('ORDER_NOT_FOUND_AUTH') });
        }

        await order.save();

        res.json({ message: getMessage('ORDER_STATUS_UPDATED'), order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = statusOrder;
