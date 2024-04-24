const Book = require("../../model/bookModel");
const getMessage = require("../../utils/message");


const bookAuthorDetails = async (req, res) => {


    try {
        const id = req.params.id
        const userInstance = req.user.id
        const BookInstance = await Book.findOne({ _id: id, createdBy: userInstance }).populate({ path: "createdBy", })

        if (!BookInstance) {
            return res.status(404).json({ message: (getMessage("BOOK_CREATED_NOT_FOUND")) })
        }

        return res.status(200).json({ BookInstance })

    } catch (error) {

        return res.status(500).json({ message: error })
    }

}


module.exports = bookAuthorDetails




// const Book = require("../../model/bookModel");
// const getMessage = require("../../utils/message");
// const mongoose = require('mongoose')

// const bookAuthorDetails = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userInstance = req.user.id;

//         const bookInstance = await Book.aggregate([
//             {
//                 $match: {
//                     _id: new mongoose.Types.ObjectId(id),
//                     createdBy: new mongoose.Types.ObjectId(userInstance),
//                 },
//             },
//             {
//                 $lookup: {
//                     from: "users", //user table
//                     localField: "createdBy", // book table field
//                     foreignField: "_id", // user  table Id
//                     as: " details", // result
//                 },

//             },

//         ]);

//         if (bookInstance.length === 0) {
//             return res.status(404).json({ message: getMessage("BOOK_CREATED_NOT_FOUND") });
//         }

//         return res.status(200).json({ bookInstance: bookInstance[0] });
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// module.exports = bookAuthorDetails; 
