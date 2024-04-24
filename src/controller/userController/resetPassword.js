const User = require("../../model/userModel");
const { generateHash } = require("../../utils/auth");
const getMessage = require("../../utils/message");

const resetPassword = async (req, res) => {
    try {
        const { newPassword } = req.body;
        const userInstance = req.user.id
        const { resetToken } = req.params

        const user = await User.findById(userInstance);
        if (!user || user.resetToken !== resetToken) {
            return res.status(404).json({ message: "Invalid user or reset token" });
        }

        if (!user) {
            return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) });
        }
        const hashPassword = await generateHash(newPassword)
        user.password = hashPassword;
        user.token = " ";
        await user.save();


        return res.status(200).json({ message: getMessage('RESET_PASSWORD') })
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = resetPassword; 