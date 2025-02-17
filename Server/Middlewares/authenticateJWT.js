const passport = require('passport');
const jwt = require('jsonwebtoken');
const USER = require('../Models/User');
const dotenv = require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET

function authenticateJWT(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('Authenticating skipped')
        return next();
    } else {
        const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return next();
        }
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) {
                return next();
            }
            USER.findById(decoded.id).then(user => {
                if (!user) {
                    return next();
                }
                req.user = user;
                req.isAuthenticated = () => true;
                next();
            }).catch(err => {
                console.error(err);
                next();
            });
        });
    }


}

module.exports = authenticateJWT;
