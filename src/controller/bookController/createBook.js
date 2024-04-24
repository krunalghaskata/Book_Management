const Book = require('../../model/bookModel')
const getMessage = require('../../utils/message')

const creatbook = async (req, res) => {

    try {

        const { name, description, price, quantity } = req.body;
        const Image = req.file.filename;
        const user = req.user

        const userInstance = user

        if (!(name && description && price && quantity)) {
            return res.status(404).json({ message: (getMessage("REQUIRED_INPUT")) })
        }
        if (userInstance.role !== 'author') {

            return res.json({ message: (getMessage("YOU_NOT_CREATE_BOOK")) })
        }
        if (!user) {
            return res.status(404).json({ message: (getMessage("LOGIN_AFTER_CREATE_BOOK")) })
        }
        const BookCreate = new Book({
            name,
            description,
            price,
            quantity,
            createdBy: user.id,
            image: Image,
            role: userInstance.role,
        })
        res.cookie("set-cookie", BookCreate, {
            expires: new Date(Date.now() + 20000),
            httpOnly: true
        })


        await BookCreate.save() 
        return res.json({ message: (getMessage("BOOK_CREATE"),BookCreate) })
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}
module.exports = creatbook 