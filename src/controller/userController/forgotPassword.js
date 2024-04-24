const User = require("../../model/userModel");
const randomString = require("randomstring");
const CONFIG = require("../../config/config");

const forgotPassword = async (req, res) => {
    try {
        const userId = req.user.id

        const userInstance = await User.findById(userId);


        if (!userInstance.email) {
            return res.status(404).send(getMessage("USER_NOT_FOUND"));
        }
        const resetToken = randomString.generate();
        const link = `http://localhost:${CONFIG.PORT}/users/resetPassword/${resetToken}`;
        await userInstance.updateOne({ resetToken: resetToken });
        return res.status(200).send({ link: link });
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = forgotPassword;