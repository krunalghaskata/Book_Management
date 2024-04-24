const Book = require('../../model/bookModel');
const getMessage = require('../../utils/message');


const authorGetBook = async (req, res) => {
    try {
        const User = req.user.id

        const BookInstance = await Book.find({ createdBy: User });

        if (!BookInstance) {
            return res.status(404).json({ message: getMessage("AUTHOR_CREATE_BOOK_NOT_FOUND") })
        }

        return res.status(200).json({ BookInstance })
    } catch (error) {
        return res.status(500).json({ message: error })
    }


}

module.exports = authorGetBook


