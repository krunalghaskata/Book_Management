
const Book = require('../../model/bookModel');
const User = require("../../model/userModel")
const getMessage = require('../../utils/message');
const fs = require('fs');
const path = require('path');

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user.id;
        let newImage;

        if (req.file && req.file.filename) {
            newImage = req.file.filename;


            const userInstance = await User.findById(userId)

            if(userInstance.role !== "author"){
                return res.status(404).json({message:getMessage('YOU_NOT_UPDATE_BOOK')})
            }


            const bookMatch = await Book.findById({ _id: bookId, createdBy: userId });
            if (bookMatch && bookMatch.image) {
                try {
                    const data = fs.unlinkSync(`/home/ts/Documents/krunal/node_crud/src/public/bookImage/${bookMatch.image}`)
                } catch (unlinkErr) {
                    return res.status(500).json({ message: 'Error unlinking old file' });
                }
            }
        } else {
            const bookMatch = await Book.findById({ _id: bookId, createdBy: userId });
            newImage = bookMatch.image;
        }

        const bookUpdate = await Book.findByIdAndUpdate(
            { _id: bookId, createdBy: userId },
            { image: newImage, ...req.body },
            { new: true }
        );

        if (!bookUpdate) {
            return res.status(404).json({ message: getMessage('ID_NOT_MATCH_UPDATE') });
        }

        return res.json({ bookUpdate });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = updateBook;
