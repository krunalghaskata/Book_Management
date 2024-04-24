const Feedback = require('../../model/feedback_Book_Model')




const getAllFeedback = async (req, res) => {
    try {

        const getAllFeedback = await Feedback.find({})

        if (!getAllFeedback) {
            return res.status(404).json({ message: "feedback not found" })
        }

        return res.status(200).json({ getAllFeedback })

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


module.exports = getAllFeedback