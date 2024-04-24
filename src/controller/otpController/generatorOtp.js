
const Otp = require('../../model/otpModel');
const User = require('../../model/userModel');
const sendMail = require('../../utils/mailer');
const getMessage = require('../../utils/message');
const { generateHash } = require('../../utils/auth');

const sendOtp = async (req, res) => {
    try {
        const { email, text, subject } = req.body;

        const userData = await User.findOne({ email });

        if (!userData) {
            return res.status(404).json({ message: getMessage('USER_NOT_FOUND') });
        }
        const otpGenerator = Math.floor(1000 + Math.random() * 9000);
        const existingOtp = await Otp.findOne({ userId: userData._id });

        if (existingOtp) {
            return res.status(400).json({ message: getMessage('OTP_EXIST') });
        }

        const gOtp = otpGenerator.toString();
        const otpHash = await generateHash(gOtp);
        const enterOtp = new Otp({
            userId: userData._id,
            otp: otpHash,
            email: email
        });
        console.log(gOtp);
        await enterOtp.save();
        await sendMail(email, subject, gOtp, text,);

        return res.status(200).json({ message: getMessage("OTP_SEND_EMAIL"), gOtp });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
};

module.exports = sendOtp;
