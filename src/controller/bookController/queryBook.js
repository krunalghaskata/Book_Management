const Book = require('../../model/bookModel');
const getMessage = require('../../utils/message');

const sortingPriceBook = async (req, res) => {

    try {

        const { minPrice, maxPrice } = req.query;

        const query = {};
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) {
                query.price.$gte = minPrice;

            }
            if (maxPrice) {
                query.price.$lte = maxPrice;

            }
        }

        const BookPrice = await Book.find(query);
        res.status(200).json({ message: getMessage('MIN_MAX_PRICE'), BookPrice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = sortingPriceBook;
