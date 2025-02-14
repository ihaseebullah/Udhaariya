const URegister = require("../Models/URegister");
const USER = require("../Models/User");
const { sendVerificationEmail } = require("../Utils/sendMail");

async function Register(req, res) {
    try {
        const {uregisterId, otp } = req.body;
        

        if (!uregisterId || !otp) {
            return res.status(400).json({ message: 'Registration ID and OTP are required.' });
        }

        const uregisterUser = await URegister.findById(uregisterId);
        if (!uregisterUser) {
            return res.status(404).json({ message: 'Registration ID not found.' });
        }

        if (otp !== uregisterUser.OTP) {
            return res.status(401).json({ message: 'Invalid OTP.' });
        }

        const existingUser = await USER.findOne({ email:uregisterUser.email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        const newUser = new USER({ email:uregisterUser.email, password:uregisterUser.password, fullName: uregisterUser.fullName, isVerified: true, linkedEmails: [uregisterUser.email], DailyChallenges: [], lastChallengeCompletedOn: new Date() });

        await URegister.findByIdAndDelete(uregisterId);

        await newUser.save();

        res.status(200).json({ message: 'User registered successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during registration.' });
    }
}


async function UnverifiedRegistration(req, res) {
    try {
        const { email, password, fullName } = req.body;
        // Ensure email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const existingUser = await USER.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }
        const newUser = new URegister({ email, password, OTP: Math.floor(100000 + Math.random() * 900000).toString(), fullName });
        await newUser.save()
        // Send verification email
        sendVerificationEmail(newUser.email, newUser.OTP);
        res.status(201).json({ message: 'User registered successfully', URId: newUser._id });
    } catch (err) {
        if (err.code === 11000 && err.keyPattern?.email) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: err.message });
    }
}

module.exports = { Register, UnverifiedRegistration };
