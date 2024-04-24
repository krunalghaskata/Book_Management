// const Cart = require('../../model/add_to_cart');
// const getMessage = require('../../utils/message');
// const Book = require('../../model/bookModel');
// const User = require('../../model/userModel');

// const AddToCart = async (req, res) => {
//     try {
//         const {  bookId, quantity } = req.body;
//   const userId = req.user.id
//         if (req.user.id !== userId) {
//             return res.status(403).json({ message: getMessage('FORBIDDEN') });
//         }

//         const user = await User.findById(userId);
//         const book = await Book.findById(bookId);

//         if (!user || !book) {
//             return res.status(404).json({ message: getMessage('USER_BOOK_NOT_FOUND') });
//         }

//         if (book.quantity < quantity) {
//             return res.status(400).json({ message: getMessage('OUT_OF_STOCK') });
//         }

//         let existingCart = await Cart.findOne({ userId });

//         if (existingCart) {
//             const existingItem = existingCart.items.find(item => item?.bookId.toString() === bookId);

//             if (existingItem) {
//                 const totalQuantity = existingItem.quantity + quantity;

//                 if (totalQuantity > book.quantity) {
//                     return res.status(400).json({ message: getMessage('LIMIT_STOCK') });
//                 }

//                 existingItem.quantity = quantity;
//                 existingItem.price = book.price * existingItem.quantity;
//             } else {
//                 existingCart.items.push({
//                     bookId,
//                     BookName: book.BookName,
//                     BookImage: book.BookImage,
//                     quantity,
//                     price: book.price * quantity
//                 });
//             }

//             existingCart.totalPrice = existingCart.items.reduce((total, item) => total + item.price, 0);
//             await existingCart.save();
//         } else {
//             const newCart = new Cart({
//                 userId,
//                 items: [{
//                     bookId,
//                     quantity,
//                     price: book.price * quantity
//                 }],
//                 totalPrice: book.price * quantity
//             });

//             existingCart = await newCart.save();
//         }

//         await book.save();

//         res.status(200).json({ message: getMessage('BOOK_ADD_TO_CART'), existingCart });
//     } catch (error) {

//         return res.status(500).json({ message: getMessage('INTERNAL_SERVER_ERROR') });
//     }
// };

// module.exports = AddToCart;







// const Cart = require('../../model/add_to_cart');
// const getMessage = require('../../utils/message');
// const Book = require('../../model/bookModel');
// const User = require('../../model/userModel');

// const AddToCart = async (req, res) => {
//     try {
//         const { bookId, quantity } = req.body;
//         const userId = req.user.id
//         if (req.user.id !== userId) {
//             return res.status(403).json({ message: getMessage('FORBIDDEN') });
//         }

//         const user = await User.findById(userId);
//         const book = await Book.findById(bookId);

//         if (!user || !book) {
//             return res.status(404).json({ message: getMessage('USER_BOOK_NOT_FOUND') });
//         }

//         if (book.quantity < quantity) {
//             return res.status(400).json({ message: getMessage('OUT_OF_STOCK') });
//         }

//         let existingCart = await Cart.findOne({ userId });

//         if (existingCart) {
//             const existingItem = existingCart.items.find(item => item?.bookId.toString() === bookId);

//             if (existingItem) {
//                 const totalQuantity = existingItem.quantity + quantity;

//                 if (totalQuantity > book.quantity) {
//                     return res.status(400).json({ message: getMessage('LIMIT_STOCK') });
//                 }

//                 existingItem.quantity = quantity;
//                 existingItem.price = book.price;
//             } else {
//                 existingCart.items.push({
//                     bookId,
//                     BookName: book.name,
//                     BookImage: book.image,
//                     quantity,
//                     price: book.price
//                 });
//             }

//             existingCart.totalPrice = existingCart.items.reduce((total, item) => total + item.price, 0);
//             await existingCart.save();
//         } else {
//             const newCart = new Cart({
//                 userId,
//                 items: [{
//                     bookId,
//                     BookName: book.name,
//                     BookImage: book.image,
//                     quantity,
//                     price: book.price
//                 }],
//                 totalPrice: book.price * quantity
//             });

//             existingCart = await newCart.save();
//         }

//         await book.save();

//         res.status(200).json({ message: getMessage('BOOK_ADD_TO_CART'), existingCart });
//     } catch (error) {

//         return res.status(500).json({ message: getMessage('INTERNAL_SERVER_ERROR') });
//     }
// };

// module.exports = AddToCart;




const Cart = require('../../model/add_to_cart');
const getMessage = require('../../utils/message');
const Book = require('../../model/bookModel');
const User = require('../../model/userModel');

const AddToCart = async (req, res) => {
    try {
        const { bookId, quantity } = req.body;
        const userId = req.user.id
        if (req.user.id !== userId) {
            return res.status(403).json({ message: getMessage('FORBIDDEN') });
        }

        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user) {
            return res.status(404).json({ message: getMessage('USER_NOT_FOUND') });
        }

        if (!book) {
            return res.status(404).json({ message: getMessage('BOOK_NOT_FOUND') });
        }

        if (book.quantity < quantity) {
            return res.status(400).json({ message: getMessage('OUT_OF_STOCK') });
        }

        let existingCart = await Cart.findOne({ userId });

        if (existingCart) {
            const existingItem = existingCart.items.find(item => item?.bookId.toString() === bookId);

            if (existingItem) {
                const totalQuantity = existingItem.quantity + quantity;

                if (totalQuantity > book.quantity) {
                    return res.status(400).json({ message: getMessage('LIMIT_STOCK') });
                }

                existingItem.quantity = quantity;
                existingItem.price = book.price * existingItem.quantity;
            } else {
                existingCart.items.push({
                    bookId,
                    BookName: book.name,
                    BookImage: book.image,
                    quantity,
                    price: book.price * quantity
                });
            }

            existingCart.totalPrice = existingCart.items.reduce((total, item) => total + item.price, 0);
            await existingCart.save();
        } else {
            const newCart = new Cart({
                userId,
                items: [{
                    bookId,
                    BookName: book.name,
                    BookImage: book.image,
                    quantity,
                    price: book.price * quantity
                }],
                totalPrice: book.price * quantity
            });

            existingCart = await newCart.save();
        }

        res.status(200).json({ message: getMessage('BOOK_ADD_TO_CART'), existingCart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: getMessage('INTERNAL_SERVER_ERROR') });
    }
};

module.exports = AddToCart;
