const Book = require('../../model/bookModel')
const User = require('../../model/userModel')
const getMessage = require("../../utils/message")

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user.id;

        const userInstance = await User.findById(userId)

        if (userInstance.role !== "author") {
            return res.status(404).json({ message: getMessage("YOU_NOT_DELETE_BOOK") })
        }

        const BookDelete = await Book.findOneAndDelete({ _id: bookId, createdBy: userId })
        if (!BookDelete) {
            return res.status(404).json({ message: (getMessage("ID_NOT_MATCH_DELETE")) })
        }
        return res.status(200).json({ message: (getMessage("BOOK_DELETE")) })
    } catch (error) {
        return res.status(500).json({ message: error })
    }


}

module.exports = deleteBook