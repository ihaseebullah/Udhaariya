const passport = require('passport');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

function Login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ message: info.message || 'Login failed' });

        req.logIn(user, async (err) => {
            if (err) return next(err);
            try {
                req.user = user;
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: (30 * 24 * 60 * 60 * 1000) });
                res.cookie('jwt', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: (30 * 24 * 60 * 60 * 1000) });
                return res.json({ message: 'Login successful', token, user });
            } catch (error) {
                return res.status(500).json({ message: 'Token creation failed' });
            }
        });
    })(req, res, next);
}

module.exports = { Login };
