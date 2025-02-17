const USER = require("../../Models/User");
const { sendVerificationEmail } = require("../../Utils/sendMail");

const addEmail = async (req, res) => {
    try {
        const { email, OTP, userId } = req.body;
        const user = await USER.findOne({ email });
        if (user) {
            return res.status(404).json({ error: 'This email has already been registered!' });
        } else {
            const nativeUser = await USER.findById(userId);
            if (nativeUser.OTP === OTP) {
                nativeUser.OTP = null;
                nativeUser.VFCP = false;
                nativeUser.linkedEmails ? nativeUser.linkedEmails.push(email) : nativeUser.linkedEmails = [email]
                await nativeUser.save().then((user) => {
                    return res.status(200).json({ message: 'OTP verified successfully', user });
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
const setDefault = async (req, res) => {
    const { email, userId } = req.body;
    const user = await USER.findByIdAndUpdate(userId, { email: email });
    res.status(200).json({ message: "Switched to default email successfully", user })
}
const unlinkEmail = async (req, res) => {
    try {
        const { email, userId } = req.body;
        const user = await USER.findById(userId);
        if (user.linkedEmails.includes(email) && user.email != email) {
            user.linkedEmails = user.linkedEmails.filter(linkedEmail => linkedEmail !== email);
            await user.save().then((user) => {
                return res.status(200).json({ message: 'Email unlinked successfully', user });
            })
        } else {
            if (user.email == email) {
                return res.status(403).json({ error: 'You cannot unlink your default email' });
            }
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'Server Error' });
    }
}
const sendOTPForAddingEmail = async (req, res) => {
    try {
        const { email, userId } = req.body;
        const userAvailable = await USER.findOne({ email });
        if (userAvailable) {
            return res.status(403).json({ message: 'Email already linked to another account' });
        } else {
            const user = await USER.findById(userId);
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

module.exports = { addEmail, setDefault, sendOTPForAddingEmail, unlinkEmail }