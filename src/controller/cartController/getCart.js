const Cart = require('../../model/add_to_cart')
const getMessage = require('../../utils/message')

const getCart = async (req, res) => {

    try {

        const userId = req.user.id;

        const getCart = await Cart.findOne({ userId });

        // if (!getCart) {
        //     return res.status(404).json({ message: getMessage("CART_NOT_FOUND") });
        // }
        return res.status(201).json({ getCart });
    } catch (error) {

        return res.status(500).json({ error });
    }


}


module.exports = getCart



