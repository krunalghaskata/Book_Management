// const Order = require('../../model/order_Book')
// const getMessage = require('../../utils/message')


// const getOrder = async (req, res) => {
//     try {

//         const OrderId = req.params.id

//         const orderget = await Order.findById({ _id: OrderId }) 
//         if (!orderget) {
//             return res.status(404).json({ message: (getMessage("ORDER_NOT_FOUND")) })
//         }

//         return res.status(201).json(orderget)

//     } catch (error) {
//         return res.status(505).json({ error })
//     }
// }

// module.exports = getOrder



const Order = require('../../model/order_Book');
const getMessage = require('../../utils/message');

const getOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderget = await Order.findOne({ userId });

        if (!orderget) {
            return res.status(404).json({ message: (getMessage("ORDER_NOT_FOUND")) })
        }

        return res.status(200).json({ order: orderget });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = getOrder;
