const USER = require("../Models/User");
const { sendVerificationEmail } = require("../Utils/sendMail");

const ChangePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await USER.findById(req.user.id);
        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect.' });
        }
        user.password = newPassword;
        await user.save();

        res.json({ message: 'Password changed successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = ChangePassword;