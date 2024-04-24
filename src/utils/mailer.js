const nodemailer = require('nodemailer');

const sendMail = async (email, name, otpCode, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject || "OTP Verification",
            text:  `Hello ${name}, Your OTP code is: ${otpCode}`,
        };


        await transporter.sendMail(mailOptions);
    } catch (error) {

        throw error;
    }
}

module.exports = sendMail; 