
const Cart = require("../../model/add_to_cart");
const Book = require('../../model/bookModel');
const getMessage = require('../../utils/message');

const updateCart = async (req, res) => {
    try {
        const objectId = req.params.id;

        const { itemId, quantity } = req.body;


        const cartData = await Cart.findById(objectId);

        if (!cartData) {
            return res.status(404).json({ message: getMessage('CART_NOT_FOUND') });
        }

        const itemsData = cartData.items.find(item => item._id == itemId);

        if (!itemsData) {
            return res.status(404).json({ message: getMessage('ITEM_NOT_FOUND_IN_CART') });
        }
        const book = await Book.findById(itemsData.bookId,);

        const updatedPrice = book.price * quantity;

        itemsData.quantity = quantity;
        itemsData.price = updatedPrice;

        await cartData.save();

        return res.status(201).json({ message: (getMessage("CART_UPDATE")), itemsData });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = updateCart;