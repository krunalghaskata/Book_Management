const Book = require("../../model/bookModel")
const cart = require('../../model/add_to_cart')


const aggregation = async (req, res) => {

    try {
        const data = await Book.aggregate([
            // {
            //     $lookup: {
            //         from: "users",//user table 
            //         localField: "createdBy", // book table field
            //         foreignField: "_id", //user table _id
            //         as: "details" // result

            //     }
            // },
            // {
            //     $addFields: { //array replce object
            //         details: {
            //             $arrayElemAt: ["$details", 0]
            //         }
            //     }
            // },
            // 
            // {
            //     $group: {
            //         _id: '$_id', // group by employee
            //         count: { $sum: 1 } // count the number of documents in each group
            //     }
            // },

            // {
            //     $limit: (2) // limit a document in each group
            // },
            // {
            //     $skip:(3) // skip a document in each group
            // },
            // {
            //     $unwind: '$createdBy'
            // },
            // {
            //    $match:{price:{$gt:600}}  // book price greater then
            // //    $match:{price:{$lt:600}} // book price less then
            // },
            // {
            //     $sort: ({price:1})//  decrement to increment
            //     // $sort: ({price:-1})//  increment to decrement

            // },
            // {
            //     $project: { name: 1, price: 1, quantity: 1 } // specific field get
            // },
            // {
            //     $graphLookup: {
            //         from: 'users',
            //         startWith: "$createdBy",
            //         connectFromField: 'userId',
            //         connectToField: '_id',
            //         as: 'result',
            //         maxDepth: 1,
            //         restrictSearchWithMatch: {}
            //     }
            // },
            // {
            //     $bucket: {        //total count book and book name
            //         groupBy: "$_id",
            //         boundaries: [0, 150, 200, 300],
            //         default: "_id",
            //         output: {
            //             "count": { $sum: 1 },
            //             "BookName": { $push: "$name" }

            //         }
            //     }
            // },

        ])



        return res.status(200).json({ data })

    } catch (error) {
        return res.status(500).json({ message: error })
    }


}


module.exports = aggregation