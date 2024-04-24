const Feedback = require('../../model/feedback_Book_Model')

const updateFeedback = async (req, res) => {
    try {

        const feedbackId = req.params.id;
        const userId = req.user.id

        const updated = await Feedback.findOneAndUpdate({ _id: feedbackId, userId: userId }, { ...req.body }, { new: true })

        if (!updated) {
            return res.status(404).json({ messsage: " id  not match user not created a feedback" })
        }


        return res.status(200).json({ message: "feedback update  successfully" })

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


module.exports = updateFeedback