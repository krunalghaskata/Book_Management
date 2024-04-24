
const User = require('../../model/userModel')
const Auth = require('../../utils/auth')
const getMessage = require('../../utils/message')
const sendMail = require('../../utils/mailer')



const updatedPassword = async (req, res) => {
    try {
        const { email, oldPassword, newPassword, subject, text } = req.body

        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: (getMessage("USER_NOT_FOUND")) });
        }
        const isMatch = await Auth.compareHash(oldPassword, user.password)

        if (!isMatch) {
            return res.status(404).json({ message: getMessage('PASSWORD_NOT_MATCH') })
        }

        const hashPassword = await Auth.generateHash(newPassword)
        user.password = hashPassword


        await user.save()
        await sendMail(email, subject, text, user.name)


        return res.status(200).json({ message: getMessage("PASSWORD_UPDATED_SUCESS") })
    } catch (error) {
        return res.status(505).json({ error })
    }
}

module.exports = updatedPassword