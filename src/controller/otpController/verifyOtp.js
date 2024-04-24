
const Otp = require('../../model/otpModel');
const User = require('../../model/userModel')
const getMessage = require('../../utils/message');
const { compareHash } = require('../../utils/auth');

const verifyOtp = async (req, res) => {
    try {
        const { email, otpVerify } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: getMessage('USER_NOT_FOUND') });
        }
        const otpRecord = await Otp.findOne({ email: email });

        if (!otpRecord) {
            return res.status(404).json({ message: getMessage('OTP_NOT_FOUND') });
        }

        const otpCreationTime = otpRecord.createdAt.getTime();
        const currentTimestamp = Date.now();
        const otpExpiryTime = 60000; // milliSecond
        //60000 // 1 minit in milliseconds
        //30000 // 30s in milliseconds
        if (currentTimestamp - otpCreationTime > otpExpiryTime) {
            return res.status(404).json({ message: getMessage('OTP_EXPIRED') });
        }

        const otpCompare = await compareHash(otpVerify, otpRecord.otp);


        if (otpCompare) {
            user.verified = true;
            await user.save();

            await Otp.findByIdAndDelete(otpRecord._id);
            return res.status(200).json({ message: getMessage('OTP_VERIFY'), isVerified: true });
        } else {
            return res.status(404).json({ message: getMessage('INVALID_OTP'), isVerified: false });
        }

    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = verifyOtp

