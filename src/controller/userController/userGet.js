// const User = require('../../model/userModel')
// const getMessage = require('../../utils/message')
// // const { handleError } = require('../../middleware/errorHandling')

// const userId = async (req, res, next) => {
//     try {
//         const userId = req.user.id

//         const userInstance = await User.findById(userId);

//         if (!userInstance) {
//             return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) })
//         }

//         return res.status(200).json({ userInstance })

//     } catch (error) {
//         return res.status(500).json({ message: error })

//         // handleError(error, res);
//     }

// }

// module.exports = userId


const User = require('../../model/userModel')
const getMessage = require('../../utils/message')
const { setCacheData, getCacheData } = require('../../utils/redis_client')
// const { handleError } = require('../../middleware/errorHandling')

const userId = async (req, res, next) => {
    try {
        const userId = req.user.id
        const key = userId

        const data = await getCacheData(key)
        const userInstance = await User.findById(userId);

        if (!userInstance) {
            return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) })
        }
        await setCacheData(key, userInstance);
        return res.status(200).json({ userInstance })

    } catch (error) {
        return res.status(500).json({ message: error })

        // handleError(error, res);
    }

}

module.exports = userId







