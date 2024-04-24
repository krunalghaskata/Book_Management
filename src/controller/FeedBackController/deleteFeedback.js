const Feedback = require('../../model/feedback_Book_Model')
const getMessage = require('../../utils/message')


const deleteFeedback = async (req, res) => {
    try {
        const FeedbackId = req.params.id;
        const userId = req.user.id;

        const feebackDelete = await Feedback.findOneAndDelete({ _id: FeedbackId, createdBy: userId })
        if (!feebackDelete) {
            return res.status(404).json({ message: "feedback Not Found Or Unauthorized To Delete" })
        }
        return res.status(200).json({ message: "feedback delete successfully", feebackDelete })
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

module.exports = deleteFeedback



