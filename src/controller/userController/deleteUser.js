
const User = require('../../model/userModel');
const getMessage = require('../../utils/message');

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const userToDelete = await User.findById({ _id: userId });

        if (!userToDelete) {
            return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) });
        }
        await User.findByIdAndDelete(userId);

        res.status(200).json({ message: (getMessage("DELETE_USER")), userToDelete });
    } catch (error) {
        return res.status(500).json({ message: error })
    }
};

module.exports = deleteUser;
