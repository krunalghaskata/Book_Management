const Feedback = require('../../model/feedback_Book_Model')
const User = require('../../model/userModel')
const getMessage = require('../../utils/message')



const FeedbackCreate = async (req, res) => {
    try {

        const user = req.user.id
        const { rating, comment } = req.body
        if (!user) {
            return res.status(404).json({ message: getMessage("USER_NOT_FOUND") })
        }

        if (rating > 5) {
            return res.status(404).json({ message: getMessage('MAX_RATING') })
        }

        if (rating < 0) {
            return res.status(404).json({ message: getMessage("LESS_RETING") })
        }
        const feedback = new Feedback({
            userId: user,
            rating,
            comment
        });
        await feedback.save();
        res.status(200).json({ message: getMessage("FEEDBACK_SUCCESS", feedback) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}


module.exports = FeedbackCreate