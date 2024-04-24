
const Book = require('../../model/bookModel')
const getMessage = require('../../utils/message')

 
const serchingBook = async (req, res) => {

    try {
        const key = req.params.key
        let searchData = await Book.find({

            "$or": [
                { name: { $regex: key, $options: "i" } },
                { description: { $regex: key, $options: "i" } },

            ]
        })

        if (!searchData) {
            return res.status(404).json({ message: getMessage('BOOK_NOT_FOUND') })
        }

        return res.json({ searchData })

    } catch (error) {
        return res.status(505).json({ message: error })
    }



}


module.exports = serchingBook