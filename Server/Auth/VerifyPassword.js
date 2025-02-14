const bcrypt = require('bcrypt')
const USER = require("../Models/User");

const verifyPassword = async (req, res) => {
    const { password, userId } = req.body;
    console.log(req.body)
    const user = await USER.findById(userId);
    if (!password) {
        return res.status(400).json({ message: 'Password is required.', valid: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password.', valid: false });
    }
    res.status(200).json({ message: 'Password is good', valid: true });
}

module.exports = { verifyPassword }