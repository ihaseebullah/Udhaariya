const USER = require("../Models/User");
const { sendVerificationEmail } = require("../Utils/sendMail");

const ChangeEmail = async (req, res) => {
    try {
        const { email, userId, olderEmail } = req.body;
        const user = await USER.find({ _id: userId, email: olderEmail });
        const emailInUse = await USER.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        if (!user.VFCP) {
            return res.status(403).json({ error: 'You are not verified to perform this action' });
        }
        if (emailInUse) {
            return res.status(400).json({ error: 'Email is already in use' });
        }
        user.email = email;
        await user.save();
        res.json({ message: 'Password changed successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = ChangeEmail;