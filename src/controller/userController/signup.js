// const User = require('../../model/userModel');
// const Otp = require('../../model/otpModel');
// const { generateHash } = require('../../utils/auth');
// const sendMail = require('../../utils/mailer');
// const getMessage = require('../../utils/message');
// const validator = require('validator');

// const signup = async (req, res) => {
//     try {
//         const { name, email, password, role, subject, text } = req.body;


//         if (!validator.isEmail(email)) {
//             return res.status(400).json({ message: (getMessage("INVALID_EMAIL")) });
//         }

//         if (!(name && password && role)) {
//             return res.status(400).json({ message: (getMessage("REQUIRED_INPUT")) });
//         }

//         const userInstance = await User.findOne({ email });

//         if (userInstance) {
//             return res.status(400).json({ message: (getMessage("USER_EXIST")) });
//         }

//         const hashPassword = await generateHash(password);

//         const user = new User({
//             name,
//             email,
//             password: hashPassword,
//             role,
//         });
//         res.cookie("set-cookie", user, {
//             expires: new Date(Date.now() + 20000),
//             httpOnly: true
//         })


//         await user.save();
//         const otpCode = Math.floor(1000 + Math.random() * 9000);
//         const G_otp = otpCode.toString()
//         const otpHash = await generateHash(G_otp)

//         const otpRecord = new Otp({
//             email,
//             otp: otpHash,
//             userId: user._id,
//         });
//         await otpRecord.save();


//         await sendMail(email, name, subject, otpCode, text);


//         return res.status(200).json({ user });

//     } catch (error) {
//         return res.status(500).json({ message: error });
//     }
// };

// module.exports = signup;

 





const User = require('../../model/userModel');
const Otp = require('../../model/otpModel');
const { generateHash } = require('../../utils/auth');
const sendMail = require('../../utils/mailer');
const getMessage = require('../../utils/message');
const validator = require('validator');

const signup = async (req, res) => {
    try {
        const { name, email, password, role, subject, text } = req.body;


        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: (getMessage("INVALID_EMAIL")) });
        }

        if (!(name && email && password && role)) {
            return res.status(400).json({ message: (getMessage("REQUIRED_INPUT")) });
        }

        const userInstance = await User.findOne({ email });

        if (userInstance) {
            return res.status(400).json({ message: (getMessage("USER_EXIST")) });
        }

        const hashPassword = await generateHash(password);

        const user = new User({
            name,
            email,
            password: hashPassword,
            role,
        });
        res.cookie("set-cookie", user, {
            expires: new Date(Date.now() + 20000),
            httpOnly: true
        })
        await user.save();
        const otpCode = Math.floor(1000 + Math.random() * 9000);
        console.log("otpCode", otpCode)
        const G_otp = otpCode.toString()
        const otpHash = await generateHash(G_otp)

        const otpRecord = new Otp({
            email,
            otp: otpHash,
            userId: user._id,
        });

        await otpRecord.save();


        await sendMail(email, name, otpCode, subject, text);


        return res.status(200).json({ message: "signup successfully", user });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = signup; 