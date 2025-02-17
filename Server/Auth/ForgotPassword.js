const USER = require("../Models/User");
const { sendVerificationEmail } = require("../Utils/sendMail");

const SendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await USER.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            user.OTP = Math.floor(100000 + Math.random() * 900000).toString()
            await user.save().then((user) => {
                sendVerificationEmail(email, user.OTP, true)
                return res.status(200).json({ message: 'OTP sent successfully' });
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server Error' });
    }
}


const verifyOTP = async (req, res) => {
    try {
        const { email, OTP } = req.body;
        const user = await USER.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        } else {
            if (user.OTP === OTP) {
                user.OTP = null;
                user.VFCP = true;
                await user.save().then((user) => {
                    return res.status(200).json({ message: 'OTP verified successfully' });
                })
            } else {
                return res.status(401).json({ error: 'Invalid or Expired OTP' });
            }
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server Error' });
    }
}


const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const user = await USER.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!user.VFCP) {
            return res.status(403).json({ error: 'You are not verified to perform this action' });
        }
        // Calculate if the last password change was within the past 30 days
        const currentDate = new Date();
        // const lastChangedDate = user.lastPasswordChangedOn || user.createdAt;
        // const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

        // if (currentDate - lastChangedDate < thirtyDaysInMs) {
        //     return res.status(403).json({ error: 'Password was changed within the last 30 days' });
        // }

        // Update password if it wasn't changed recently
        user.password = newPassword;
        user.VFCP = false;
        user.lastPasswordChangedOn = currentDate;
        await user.save();
        return res.status(200).json({ message: 'Password changed successfully' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server Error' });
    }
};


module.exports = {
    SendOTP,
    verifyOTP,
    resetPassword
}