const Book = require("../../model/bookModel")
const getMessage = require("../../utils/message")



const bookGetId = async (req, res) => {

    try {
        const id = req.params.id;
         const userId = req.user.id

        const book = await Book.findOne({ _id: id, createdBy: userId })
        if (!book) {
            return res.status(404).json({ message: (getMessage("BOOK_NOT_FOUND")) })
        }
        return res.status(200).json({ book })
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}


module.exports = bookGetId



