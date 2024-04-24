const Feedback = require('../../model/feedback_Book_Model')



const getFeedback = async (req, res) => {
    try {

        const userId = req.user.id;

        const getFeedback = await Feedback.findOne({ userId })

        if (!getFeedback) {
            return res.status(404).json({ message: "feedback not found" })
        }


        return res.status(200).json({ message: "feedback found", getFeedback })


    } catch (error) {
        return res.status(500).json({ message: error })
    }
}



module.exports = getFeedback