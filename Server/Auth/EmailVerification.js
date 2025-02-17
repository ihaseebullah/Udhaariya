const USER = require("../Models/User");

const emailVerification = async (req, res) => {
    try {
        const { OTP, userId } = req.body;
        const User = await USER.findById(userId);
        if (User.OTP == OTP) {
            User.isVerified = true;
            User.OTP = null;
            await User.save();
            res.status(200).json({ message: "Email verified successfully" });
        } else {
            res.status(400).json({ message: "Invalid or Expired OTP, Check the latest OTP you've got" });
        }
    } catch (e) {
        res.status(500).json({ message: "An error occurred" });
    }
}

module.exports = emailVerification;