const Cart = require('../../model/add_to_cart');
const Book = require('../../model/bookModel');
const getMessage = require('../../utils/message');

const removeCart = async (req, res) => {
    try {
        const objectId = req.params.id;
        const { itemId } = req.body;

        const cartData = await Cart.findById(objectId);

        if (!cartData) {
            return res.status(404).json({ message: getMessage('CART_NOT_FOUND') });
        }
        const removedItem = cartData.items.find(item => item._id == itemId);

        if (!removedItem) {
            return res.status(404).json({ message: getMessage('ITEM_NOT_FOUND_IN_CART') });
        }

        await Book.findById(removedItem.bookId);

        const updatedCart = await Cart.findByIdAndUpdate(
            objectId,
            { $pull: { items: { _id: itemId } } },
            { new: true }
        );

        if (updatedCart.items.length === 0) {
            await Cart.findByIdAndDelete(objectId)
            return res.json({ message: getMessage("CART_DELETED") })
        }
        return res.status(200).json({ message: getMessage("CART_ITEMS_DELETE"), updatedCart });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = removeCart;
