// const User = require('../../model/userModel');
// const getMessage = require('../../utils/message');

// const logOut = async (req, res) => {
//     try {

//         const user = await User.findOne({ Token: req.body.token });

//         if (!user) {
//             return res.status(404).json({ message: getMessage("USER_NOT_FOUND") });
//         }

//         user.Token = null;
//         await user.save();

//         return res.status(200).json({ message: getMessage("LOGOUT_SUCCESS"), user });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }

// module.exports = logOut;


// const User = require('../../model/userModel');
// const getMessage = require('../../utils/message');

// const logOut = async (req, res) => {
//     try {
//         const userInstance = req.user;
//         const user = await User.findOne({ userInstance });

//         if (!user) {
//             return res.status(404).json({ message: getMessage("USER_NOT_FOUND") });
//         }

//         user.Token = null;
//         await user.save();

//         return res.status(200).json({ message: getMessage("LOGOUT_SUCCESS"), user });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }

// module.exports = logOut;




const User = require('../../model/userModel');
const getMessage = require('../../utils/message');

const logOut = async (req, res) => {
    try {  
         if (!req.user || !req.user.id) {
            return res.status(401).json({ message: getMessage("UNAUTHORIZED") });
        }

        const userId = req.user.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: getMessage("USER_NOT_FOUND") });
        }

        user.Token = " ";
        await user.save();

        return res.status(200).json({ message: getMessage("LOGOUT_SUCCESS"), user });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: getMessage("SERVER_ERROR") });
    }
}

module.exports = logOut;
