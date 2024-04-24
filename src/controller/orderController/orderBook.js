
const Order = require("../../model/order_Book");
const Cart = require('../../model/add_to_cart');
const getMessage = require('../../utils/message');


const orderBook = async (req, res) => {
    try {
        const { cartId } = req.params;
        const userId = req.user.id;

        const cart = await Cart.findOne({ cartId }).populate("items.bookId");
        console.log(cart);

        if (!cart) {
            return res.status(404).json({ message: getMessage('CART_NOT_FOUND') });
        }

        const orderItems = cart.items.map(item => ({
            bookId: item.bookId._id,
            quantity: item.quantity,
            price: item.bookId.price,
        }));

        let totalPrice = 0;

        for (const item of cart.items) {
            if (item.bookId.quantity < item.quantity) {
                return res.status(400).json({ message: getMessage('OUT_OF_STOCK') });
            }

            totalPrice += item.bookId.price * item.quantity;
        }

        if (cart.items.length === 0) {
            return res.json({ message: getMessage("CART_EMPTY") });
        }

        // Remove items from cart
        await Cart.updateOne({ _id: cart._id }, { $unset: { items: [] } });

        // Update book quantities
        for (const item of cart.items) {
            const book = item.bookId;
            book.quantity -= item.quantity;
            await book.save();
        }

        // Create order
        const order = new Order({
            cartId,
            userId,
            items: orderItems,
            totalPrice: totalPrice
        });

        await order.save();

        await Cart.findByIdAndDelete(cart._id);

        return res.status(201).json({ message: getMessage("ORDER_SUCCESS"), order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = orderBook; 
