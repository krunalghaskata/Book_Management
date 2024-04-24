
const User = require('../../model/userModel');
const getMessage = require('../../utils/message');
const { generateHash } = require("../../utils/auth");

const updateUser = async (req, res) => {

    try {
        const userId = req.user.id;
        let { password } = req.body;

        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return res.status(404).json({ message: getMessage("USER_NOT_FOUND") });
        }

        if (password) {
            password = await generateHash(password);
        }

        await User.findOneAndUpdate(userToUpdate, { ...req.body, password }, { new: true });

        return res.status(200).json({ message: getMessage("USER_UPDATED") });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
};

module.exports = updateUser;





