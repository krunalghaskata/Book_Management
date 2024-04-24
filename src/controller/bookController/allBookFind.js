const Book = require('../../model/bookModel')


const allBook = async (req, res) => {
    try {
        const allbook = await Book.aggregate([{ $unwind: '$createdBy' },])
        // const allbook = await Book.find({})

        return res.status(200).json({ allbook })

    } catch (error) {
        return res.status(505).json({ error })
    }
}

module.exports = allBook