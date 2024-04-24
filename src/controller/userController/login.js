const User = require("../../model/userModel");
const getMessage = require("../../utils/message");
const { compareHash, genetareToken } = require("../../utils/auth");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let isAdmin = false

    const userInstance = await User.findOne({ email });

    if (!userInstance) {
      return res.status(404).json({ message: (getMessage("SIGNUP_FIRST")) });
    }

    if (userInstance.verified === false) {
      return res.status(404).json({ message: getMessage('OTP_VERIFY_FIRST') })
    }
    const comparePassword = await compareHash(password, userInstance.password);
    if (!comparePassword) {
      return res.status(404).send(getMessage("INVALID_PASSWORD"));
    }

    const token = await genetareToken({ id: userInstance.id, role: userInstance.role });
    userInstance.token = token;

    res.cookie("set-cookie", userInstance.token, {
      expires: new Date(Date.now() + 60000),
      httpOnly: true
    })
    
    userInstance.save();
    if (userInstance.role === 'admin') {
      isAdmin = true
    }
    return res.status(200).json({ message: (getMessage("LOGIN_SUCCESS")), userToken: token, name: userInstance.name, email: userInstance.email, role: (`${userInstance.role}`), isAdmin });

  } catch (error) {
    return res.status(500).json({ message: error })
  }
};

module.exports = login;