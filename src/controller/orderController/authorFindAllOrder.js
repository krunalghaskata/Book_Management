// const Book = require('../../model/bookModel')
// const Order = require("../../model/order_Book");
// const User = require('../../model/userModel');
// const getMessage = require('../../utils/message')

// const authorFindAllOrder = async (req, res) => {
//     try {
//         const userId = req.user.id

//         const user = await User.findById(userId);


//         if (!user || user.role !== 'author') {
//             return res.status(403).json({ message: (getMessage("FORBIDDEN")) });
//         }

//         const authorsBook = await Book.find({ createdBy: userId })


//         const bookIds = authorsBook.map((item) => item._id)


//         const orders = await Order.find({ 'items.bookId': { $in: bookIds } })

//         res.status(200).json({ message: getMessage('AUTHOR_ORDER_FIND'), orders });
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// };

// module.exports = authorFindAllOrder; 


const Book = require('../../model/bookModel');
const Order = require('../../model/order_Book');
const User = require('../../model/userModel');
const getMessage = require('../../utils/message');

const authorFindAllOrder = async (req, res) => {
    try {
        const userId = req.user.id;

        const { Status } = req.body;

        const user = await User.findById(userId);

        if (!user || user.role !== 'author') {
            return res.status(403).json({ message: getMessage('FORBIDDEN') });
        }

        const authorsBook = await Book.find({ createdBy: userId });
        const bookIds = authorsBook.map((item) => item._id);

        const orders = await Order.find({
            'items.bookId': { $in: bookIds },
            "items.status": Status,
        });

        const filteredOrder = orders.map(((item) => {

            return {
                _id: item._id,
                userId: item._userId,
                items: item.items.filter((item1) => {
                    return item1.status === Status
                })
            }

        }))

        res.status(200).json({ message: getMessage('AUTHOR_ORDER_FIND'), filteredOrder });
    } catch (error) {
        res.status(500).json({ error });
    }
};


module.exports = authorFindAllOrder;