const Cart = require('../../model/add_to_cart')
const getMessage = require('../../utils/message')

const allCart = async (req, res) => {

    try {

        const userId = req.user.id;

        const allcart = await Cart.find();

        if (!allcart) {
            return res.status(404).json({ message: getMessage("CART_NOT_FOUND") });
        }
        return res.status(201).json({ allcart });
    } catch (error) {

        return res.status(500).json({ error });
    }


}


module.exports = allCart