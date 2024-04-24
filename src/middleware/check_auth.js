const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config')
// const User = require('../model/userModel')
const { verifyToken } = require('../utils/auth');
const getMessage = require('../utils/message');



exports.checkAuth = async (req, res, next) => {

    try {

        let token = req.headers.authorization;
        if (!token) {
            return res.status(404).json({ message: (getMessage("REQUIRE_TOKEN")) })
        }

        token = token.slice(7);
        const decoded = await verifyToken(token, CONFIG.TOKEN.SIGN)

        const userId = decoded;
        req.user = userId;


        // const userInstance = await User.findById(userId)
        // if (!userInstance) {
        //     return res.status(404).send(getMessage("REQUIRE_LOGIN"))
        // }

        next();

    } catch (error) {
        if (error.message === "jwt expired") {
            return res.status(500).json({ message: 'token Expired' })
        }
        res.status(500).send(error)
    }
}


// module.exports = checkAuth



// exports.admin = async (req, res, next) => {
//     if (req.role === "user" || "admin") {
//        return await res.send("your role ")
//     }
//     return next()
// }
