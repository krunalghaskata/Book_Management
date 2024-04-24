const User = require('../../model/userModel')
const getMessage = require("../../utils/message")

const allUser = async (req, res) => {

  try {
    const allUser = await User.find()

    if (allUser.length === 0) {
      return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) })
    }
    return res.status(200).json({ allUser })


  } catch (error) {
    return res.status(500).json({ message: error })
  }

}

module.exports = allUser